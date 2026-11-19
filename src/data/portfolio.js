// ✏️ EDIT YOUR CONTENT HERE. Values containing "YOUR" are treated as unset and render as non-clickable.
export const site = {
  name: 'Layefa Samuel',
  logo: 'LAYEFA',
  title: 'AI Automation Developer | Web Developer',
  availability: 'Open to opportunities',
  hero: {
    label: "HELLO, I'M LAYEFA.",
    heading: 'BUILDING DIGITAL SOLUTIONS THROUGH AI & TECHNOLOGY.',
    text: "I'm an AI Automation and Web Development enthusiast focused on building intelligent systems, automating business processes, and creating useful digital experiences.",
    tags: ['AI AUTOMATION', 'WEB DEVELOPMENT', 'WORKFLOW DESIGN'],
    cta: ['Explore My Work', "Let's Talk"],
    marquee: ['AI AUTOMATION', 'WEB DEVELOPMENT', 'BUSINESS SOLUTIONS', 'CREATIVE TECHNOLOGY'],
  },
  images: {
    profile: '/images/profile/profile-photo.webp',
    profilePosition: '50% 20%', // object-position for the portrait crop
    heroBackground: '/images/backgrounds/hero-background.webp',
  },
  about: {
    label: 'ABOUT ME',
    heading: 'BUILDING, LEARNING AND SOLVING REAL PROBLEMS.',
    paragraphs: [
      "I'm Layefa Samuel, an aspiring AI Automation Developer and Web Developer interested in using technology to solve everyday business challenges.",
      'My journey involves exploring AI tools, building automation workflows, developing websites, and experimenting with different technologies.',
      "I've worked on practical projects involving Telegram bots, n8n automation, customer lead management, and business workflow automation.",
      "I'm currently expanding my knowledge of APIs, webhooks, JavaScript, frontend development, and AI-powered systems.",
      "My goal is to become a developer who doesn't just understand technology but knows how to use it to create meaningful solutions.",
    ],
  },
  skills: {
    label: 'MY TOOLKIT',
    heading: "TECHNOLOGIES I'M EXPLORING AND BUILDING WITH.",
    // level: 3 = Practicing, 2 = Familiar, 1 = Learning  (be honest, edit freely)
    groups: [
      { title: 'AI and Automation', items: [['n8n',3],['Claude AI',3],['ChatGPT',3],['Prompt Engineering',3],['AI Workflow Automation',3],['Telegram Bot Automation',3],['API Integration',1],['Webhooks',1]] },
      { title: 'Web Development', items: [['HTML',2],['CSS',2],['JavaScript',1],['React',1],['WordPress',2],['Responsive Web Design',2]] },
      { title: 'Tools and Platforms', items: [['VS Code',3],['GitHub',2],['Vercel',2],['Google Sheets',3],['Telegram',3],['Supabase',1]] },
    ],
  },
  projects: {
    label: 'SELECTED WORK',
    heading: "SOME THINGS I'VE BEEN BUILDING.",
    // status: 'Completed' | 'Ongoing' | 'Practice'. Leave live/github as '' until real URLs exist.
    // position (optional): which part of a tall screenshot to show, CSS object-position, default '50% 75%'.
    items: [
      { name: 'AI-Powered Task Management Telegram Bot', status: 'Completed', image: '/images/projects/task-management-bot.webp',
        description: 'A Telegram-based task management assistant built using n8n and Claude AI.',
        features: ['Create, edit and delete tasks through Telegram', 'Identify different users', 'Automated workflow processing'],
        tech: ['n8n', 'Telegram', 'Claude AI'], live: '', github: '' },
      { name: 'Gadget Customer Lead Capture Automation', status: 'Completed', image: '/images/projects/gadget-lead-capture.webp',
        description: 'An automated Telegram lead collection system that helps a gadget business collect customer enquiries and product preferences.',
        features: ['Automated customer information collection', 'Phone model selection', 'Structured lead information'],
        tech: ['n8n', 'Telegram', 'Google Sheets'], live: '', github: '' },
      { name: 'Hotel Management Automation System', status: 'Ongoing', image: '/images/projects/hotel-automation.webp',
        description: 'An ongoing automation project designed to streamline hotel operations through Telegram and Google Sheets.',
        features: ['Receptionist Telegram interface', 'Customer registration and room booking', 'Room availability checks', 'Manager notifications and service request routing', 'Operational activity logging'],
        tech: ['n8n', 'Telegram', 'Google Sheets'], live: '', github: '' },
      { name: 'Website Development Projects', status: 'Practice', image: '/images/projects/website-projects.webp',
        description: 'A collection of website development and practice projects focused on creating responsive and functional web experiences.',
        features: [], tech: ['HTML', 'CSS', 'JavaScript', 'WordPress'], live: '', github: '' },
    ],
  },
  contact: {
    label: "LET'S CONNECT",
    heading: 'HAVE A PROJECT OR AN IDEA IN MIND?',
    text: "I'm always interested in connecting with people, exploring opportunities, and discussing how technology can solve business problems.",
    whatsapp: '2348069426791', // digits with country code, e.g. 2348012345678
    email: 'samuellayefa16@gmail.com',
    linkedin: 'https://linkedin.com/in/YOUR_USERNAME',
    github: 'https://github.com/YOUR_USERNAME',
    tiktok: 'https://www.tiktok.com/@layefa424',
  },
}
