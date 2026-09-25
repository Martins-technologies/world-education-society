import { useComingSoon } from './ComingSoonProvider.jsx'

/**
 * Styled button that shows the site-wide coming soon dialog instead of navigating.
 */
export default function ComingSoonButton({
  children,
  className = '',
  message,
  type = 'button',
  onClick,
  ...rest
}) {
  const showComingSoon = useComingSoon()

  return (
    <button
      type={type}
      className={className}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) {
          showComingSoon(message)
        }
      }}
      {...rest}
    >
      {children}
    </button>
  )
}
