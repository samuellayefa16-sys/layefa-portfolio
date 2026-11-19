import { Github, Linkedin, Mail, MessageCircle, Music2 } from 'lucide-react'
export const isSet = (v) => !!v && !String(v).includes('YOUR')
export const getLinks = (c) => {
  const wa = isSet(c.whatsapp) ? c.whatsapp.replace(/\D/g, '') : ''
  return [
    { label: 'WhatsApp', Icon: MessageCircle, href: wa && `https://wa.me/${wa}`, text: wa ? '+' + wa : 'Add number in portfolio.js', ext: true },
    { label: 'Email', Icon: Mail, href: isSet(c.email) && `mailto:${c.email}`, text: isSet(c.email) ? c.email : 'Add email in portfolio.js' },
    { label: 'LinkedIn', Icon: Linkedin, href: isSet(c.linkedin) && c.linkedin, text: isSet(c.linkedin) ? 'Connect' : 'Add URL in portfolio.js', ext: true },
    { label: 'GitHub', Icon: Github, href: isSet(c.github) && c.github, text: isSet(c.github) ? 'Follow' : 'Add URL in portfolio.js', ext: true },
    { label: 'TikTok', Icon: Music2, href: isSet(c.tiktok) && c.tiktok, text: isSet(c.tiktok) ? 'Watch' : 'Add URL in portfolio.js', ext: true },
  ]
}
