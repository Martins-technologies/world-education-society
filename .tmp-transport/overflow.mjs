import { spawn } from 'node:child_process'

const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const port = 9333
const userDir = 'd:\\world-education-society\\world-education-society\\.tmp-transport\\chrome-profile'

const proc = spawn(chrome, [
  '--headless=new',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${userDir}`,
  '--disable-gpu',
  '--window-size=390,800',
  'http://localhost:5174/programs/transportation-assistance',
], { stdio: 'ignore' })

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function waitForJson() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`)
      if (res.ok) return
    } catch {}
    await sleep(250)
  }
  throw new Error('chrome debug port did not open')
}

function send(ws, method, params = {}) {
  const id = Math.floor(Math.random() * 1e9)
  const result = new Promise((resolve, reject) => {
    const onMessage = (event) => {
      const data = JSON.parse(event.data)
      if (data.id !== id) return
      ws.removeEventListener('message', onMessage)
      if (data.error) reject(new Error(JSON.stringify(data.error)))
      else resolve(data.result)
    }
    ws.addEventListener('message', onMessage)
  })
  ws.send(JSON.stringify({ id, method, params }))
  return result
}

async function evaluate(ws, expression) {
  return send(ws, 'Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
}

try {
  await waitForJson()
  const list = await (await fetch(`http://127.0.0.1:${port}/json`)).json()
  const page = list.find((item) => item.type === 'page')
  const ws = new WebSocket(page.webSocketDebuggerUrl)
  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve)
    ws.addEventListener('error', reject)
  })
  await send(ws, 'Page.enable')
  await send(ws, 'Runtime.enable')
  await send(ws, 'Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 2800,
    deviceScaleFactor: 1,
    mobile: true,
  })
  for (let i = 0; i < 20; i++) {
    const ready = await evaluate(ws, `document.querySelector('h1') ? document.querySelector('h1').textContent : ''`)
    if (ready.result?.value) break
    await sleep(300)
  }
  const metrics = await evaluate(ws, `(() => {
    const vw = document.documentElement.clientWidth
    const offenders = []
    for (const el of document.querySelectorAll('body *')) {
      const rect = el.getBoundingClientRect()
      if (rect.right > vw + 1 || rect.left < -1) {
        const style = getComputedStyle(el)
        offenders.push({
          tag: el.tagName,
          className: String(el.className).slice(0, 140),
          right: Math.round(rect.right),
          width: Math.round(rect.width),
          text: (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) ? el.textContent.trim().slice(0, 60) : '',
        })
      }
    }
    offenders.sort((a, b) => b.right - a.right)
    return { title: document.title, vw, scroll: document.documentElement.scrollWidth, body: document.body.innerText.slice(0, 80), top: offenders.slice(0, 12) }
  })()`)
  console.log(JSON.stringify(metrics.result.value, null, 2))
  const shot = await send(ws, 'Page.captureScreenshot', { format: 'png', captureBeyondViewport: true })
  const { writeFileSync } = await import('node:fs')
  writeFileSync('d:/world-education-society/world-education-society/.tmp-transport/mobile-real.png', Buffer.from(shot.data, 'base64'))
  ws.close()
} finally {
  proc.kill()
}
