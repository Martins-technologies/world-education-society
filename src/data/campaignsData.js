export const campaignImages = {
  backToLearningFeatured: 'https://cdn.pixabay.com/photo/2014/03/12/18/45/boys-286245_1280.jpg',
  backToLearningHero: 'https://cdn.pixabay.com/photo/2021/05/24/12/53/boys-6279149_1280.jpg',
  backToLearningCard: 'https://cdn.pixabay.com/photo/2016/08/05/02/44/student-1571488_1280.jpg',
  backToLearningDetail: 'https://cdn.pixabay.com/photo/2015/07/11/19/23/book-841171_1280.jpg',
  skillsForTomorrow: 'https://cdn.pixabay.com/photo/2019/12/18/13/56/glasses-4704055_1280.jpg',
  libraryAccess: 'https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg',
  resourceDistribution: 'https://cdn.pixabay.com/photo/2014/07/28/01/14/book-403383_1280.jpg',
  youthInternship: 'https://cdn.pixabay.com/photo/2026/04/14/11/47/geralt-selfie-10226114_1280.jpg',
  pastCampaigns: 'https://cdn.pixabay.com/photo/2024/09/30/13/40/child-9085875_1280.jpg',
  communityLearningOutreach:
    'https://cdn.pixabay.com/photo/2026/04/13/15/13/15-13-36-443_1280.jpg',
  calgarySchoolSupplyDrive:
    'https://cdn.pixabay.com/photo/2016/11/14/02/58/student-1822451_1280.jpg',
  scholarshipAwarenessWeek:
    'https://cdn.pixabay.com/photo/2026/03/10/04/31/geralt-education-10165350_1280.jpg',
  torontoBookDonationDrive: 'https://cdn.pixabay.com/photo/2015/10/29/09/46/books-1012088_1280.jpg',
  communityLearningFair: 'https://cdn.pixabay.com/photo/2022/01/22/03/59/family-6956174_1280.jpg',
  upcomingDrives: 'https://cdn.pixabay.com/photo/2020/01/15/16/46/children-4768404_1280.jpg',
  donateSuppliesPage: 'https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_1280.jpg',
  organizeDrivePage: 'https://cdn.pixabay.com/photo/2014/07/06/09/37/lecture-385357_1280.jpg',
}

/** Get Involved page — pathway card photos (Pixabay CDN) */
export const getInvolvedPathwayImages = {
  // Pixabay illustration 9043372 — replace with CDN from “Free download” when you have it:
  // https://pixabay.com/illustrations/ai-generated-teacher-classroom-9043372/
  volunteerWithUs: '/homeupdated/07_Get_Involved_Volunteering.webp',
  becomeAMentor: 'https://cdn.pixabay.com/photo/2020/01/22/09/40/teacher-4784917_1280.jpg',
  partnerWithUs: 'https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg',
  supportOurPrograms: '/suportourprograms.webp',
  donateResources: 'https://cdn.pixabay.com/photo/2015/10/29/09/46/books-1012088_1280.jpg',
  hostAWorkshop: 'https://cdn.pixabay.com/photo/2023/08/21/08/36/children-8203962_1280.jpg',
  employerPartnerships: 'https://cdn.pixabay.com/photo/2026/07/05/11/18/11-18-26-903_1280.jpg',
}

export const campaignHeroStats = [
  { value: '12,500+', label: 'Youth Supported Through Campaigns', icon: 'users' },
  { value: '45,000+', label: 'Educational Resources Distributed', icon: 'book' },
  { value: '320+', label: 'Community Partners', icon: 'handshake' },
  { value: '180+', label: 'Communities Reached', icon: 'map' },
  { value: '25,000+', label: 'Volunteer Hours', icon: 'heart' },
  { value: '110+', label: 'Donation Drives', icon: 'gift' },
]

export const featuredCampaign = {
  slug: 'back-to-learning-drive',
  label: 'FEATURED CAMPAIGN',
  title: 'Back to Learning Drive',
  subtitle: 'School supplies. Brighter tomorrows.',
  description:
    'Help us provide essential school supplies and learning resources to students in under-resourced communities. Every backpack helps a student feel ready, confident and supported for the school year ahead.',
  image: campaignImages.backToLearningFeatured,
  imageAlt: 'Two students with school supplies and books at a learning desk',
  dates: 'Sep 1 – Oct 31, 2025',
  location: 'Toronto, ON and surrounding communities',
  audience: '1,000 students',
  progress: 70,
  progressLabel: '70% of goal',
  quote: '“A backpack gave me confidence and a fresh start.” — Student Participant',
}

export const currentCampaigns = [
  {
    slug: 'back-to-learning-drive',
    title: 'Back to Learning Drive',
    description: 'Providing school supplies and learning resources to students in need.',
    dates: 'Sep 1 – Oct 31, 2025',
    location: 'Toronto, ON',
    audience: '1,000 students',
    progress: 70,
    progressLabel: '70% of goal',
    image: campaignImages.backToLearningCard,
    imageAlt: 'Young student studying and writing at home',
    primaryCta: { label: 'Donate', href: '/contact' },
    secondaryCta: { label: 'Learn More', href: '/campaigns/back-to-learning-drive' },
    showOnMain: true,
  },
  {
    slug: 'skills-for-tomorrow',
    title: 'Skills for Tomorrow',
    description: 'Supporting youth with digital skills training, workshops and mentorship programs.',
    dates: 'Aug 15 – Dec 15, 2025',
    location: 'Multiple Communities',
    audience: '500 youth',
    progress: 45,
    progressLabel: '45% of goal',
    image: campaignImages.skillsForTomorrow,
    imageAlt: 'Red reading glasses on an open book representing skills and learning',
    primaryCta: { label: 'Donate', href: '/contact' },
    secondaryCta: { label: 'Learn More', href: '/campaigns/skills-for-tomorrow' },
    showOnMain: true,
  },
  {
    slug: 'library-access-support',
    title: 'Library Access Support',
    description: 'Expanding access to books, learning materials and digital resources in underserved areas.',
    dates: 'Jul 1 – Nov 30, 2025',
    location: 'Calgary, AB',
    audience: '800 students',
    progress: 60,
    progressLabel: '60% of goal',
    image: campaignImages.libraryAccess,
    imageAlt: 'Grand library interior with bookshelves and reading spaces',
    primaryCta: { label: 'Donate', href: '/contact' },
    secondaryCta: { label: 'Learn More', href: '/campaigns/library-access-support' },
    showOnMain: true,
  },
  {
    slug: 'youth-internship-initiative',
    title: 'Youth Internship Initiative',
    description: 'Connecting youth with real-world learning through internships and career exposure.',
    dates: 'Jun 1 – Dec 31, 2025',
    location: 'National (Remote & In-Person)',
    audience: '300 youth',
    progress: 40,
    progressLabel: '40% of goal',
    image: campaignImages.youthInternship,
    imageAlt: 'Diverse group of young women taking a selfie together',
    primaryCta: { label: 'Donate', href: '/contact' },
    secondaryCta: { label: 'Learn More', href: '/campaigns/youth-internship-initiative' },
    showOnMain: true,
  },
]

export const campaignDetails = {
  'back-to-learning-drive': {
    title: 'Back to Learning Drive',
    subtitle: 'School supplies. Brighter tomorrows.',
    overview: featuredCampaign.description,
    dates: featuredCampaign.dates,
    location: featuredCampaign.location,
    audience: featuredCampaign.audience,
    progress: 70,
    progressLabel: '70% of goal',
    quote: featuredCampaign.quote,
    image: campaignImages.backToLearningDetail,
    imageAlt: 'Student reading a book with focus and concentration',
    actions: [{ label: 'Donate', href: '/contact', variant: 'green' }],
  },
  'skills-for-tomorrow': {
    title: 'Skills for Tomorrow',
    overview: 'Supporting youth with digital skills training, workshops and mentorship programs.',
    dates: 'Aug 15 - Dec 15, 2025',
    location: 'Multiple Communities',
    audience: '500 youth',
    progress: 45,
    progressLabel: '45% of goal',
    image: campaignImages.skillsForTomorrow,
    imageAlt: 'Red reading glasses on an open book representing skills and learning',
    actions: [{ label: 'Donate', href: '/contact', variant: 'green' }],
  },
  'library-access-support': {
    title: 'Library Access Support',
    overview: 'Expanding access to books, learning materials and digital resources in underserved areas.',
    dates: 'Jul 1 - Nov 30, 2025',
    location: 'Calgary, AB',
    audience: '800 students',
    progress: 60,
    progressLabel: '60% of goal',
    image: campaignImages.libraryAccess,
    imageAlt: 'Grand library interior with bookshelves and reading spaces',
    actions: [{ label: 'Donate', href: '/contact', variant: 'green' }],
  },
  'youth-internship-initiative': {
    title: 'Youth Internship Initiative',
    overview: 'Connecting youth with real-world learning through internships and career exposure.',
    dates: 'Jun 1 - Dec 31, 2025',
    location: 'National (Remote & In-Person)',
    audience: '300 youth',
    progress: 40,
    progressLabel: '40% of goal',
    image: campaignImages.youthInternship,
    imageAlt: 'Diverse group of young women taking a selfie together',
    actions: [{ label: 'Donate', href: '/contact', variant: 'green' }],
  },
}

export const pastCampaigns = [
  {
    slug: 'community-learning-outreach',
    title: 'Community Learning Outreach',
    description: 'Brought learning resources, workshops and mentorship to underserved communities.',
    dates: 'Jan 15 – May 31, 2025',
    location: 'Vancouver, BC',
    reach: '600 youth',
    status: 'Completed',
    image: campaignImages.communityLearningOutreach,
    imageAlt: 'Students in school uniforms waving together on outdoor bleachers',
    showOnMain: true,
  },
  {
    slug: 'scholarship-awareness-week',
    title: 'Scholarship Awareness Week',
    description: 'Increased awareness of scholarships and post-secondary opportunities for youth.',
    dates: 'Mar 1 – Mar 7, 2025',
    location: 'National',
    reach: '2,500+ youth reached',
    status: 'Completed',
    image: campaignImages.scholarshipAwarenessWeek,
    imageAlt: 'Community members raising hands during an educational outreach session',
    showOnMain: false,
  },
]

export const communityEvents = [
  {
    slug: 'calgary-school-supply-drive',
    title: 'Calgary School Supply Drive',
    date: 'Oct 12, 2025',
    location: 'Calgary, AB',
    image: campaignImages.calgarySchoolSupplyDrive,
    imageAlt: 'Student writing in a notebook while studying',
    showOnMain: true,
  },
  {
    slug: 'toronto-book-donation-drive',
    title: 'Toronto Book Donation Drive',
    date: 'Nov 8, 2025',
    location: 'Toronto, ON',
    image: campaignImages.torontoBookDonationDrive,
    imageAlt: 'Stack of books ready for donation',
    showOnMain: false,
  },
  {
    slug: 'community-learning-fair',
    title: 'Community Learning Fair',
    date: 'Dec 6, 2025',
    location: 'Mississauga, ON',
    image: campaignImages.communityLearningFair,
    imageAlt: 'Family learning together with a laptop at home',
    showOnMain: false,
  },
]

export const howCampaignsWork = [
  {
    step: 1,
    title: 'Identify Needs',
    text: 'We work with communities to understand local educational needs and priorities.',
    circle: 'bg-[#2E9A4A]',
  },
  {
    step: 2,
    title: 'Mobilize Support',
    text: 'We gather resources, donations and volunteers to power each campaign.',
    circle: 'bg-[#3B82C4]',
  },
  {
    step: 3,
    title: 'Distribute Resources',
    text: 'We deliver supplies, learning materials and opportunities directly to communities.',
    circle: 'bg-[#2E9A4A]',
  },
  {
    step: 4,
    title: 'Create Lasting Impact',
    text: 'We track progress and continue supporting youth beyond each campaign.',
    circle: 'bg-[#7C5CBF]',
  },
]

export const resourceDistributionBanner = {
  title: 'Resource Distribution & Donation Drives',
  headline: 'Tools for Learning. Hope for Brighter Futures.',
  description:
    'We organize donation drives and distribute educational resources—books, school supplies, technology and more—to support youth in communities across Canada. Your donations help remove barriers and open doors.',
  image: campaignImages.resourceDistribution,
  imageAlt: 'Books and learning materials ready for community distribution',
}

export const campaignImpactStats = [
  { value: '50,000+', label: 'Resources Distributed', icon: 'people' },
  { value: '8,500+', label: 'Students Reached', icon: 'cap' },
  { value: '200+', label: 'Community Events', icon: 'group' },
  { value: '95%', label: 'Communities Report Positive Impact', icon: 'heart' },
]
