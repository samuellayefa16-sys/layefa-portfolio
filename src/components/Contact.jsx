import { ArrowUpRight } from 'lucide-react'
import { site } from '../data/portfolio'
import { getLinks } from '../lib/links'
import Split from './Split'
export default function Contact({ ready }) {
  const c = site.contact
  return (
    <section id="contact" className="sec alt">
      <div className="wrap">
        <p className="eyebrow">{c.label}</p>
        <Split ready={ready} className="h2" text={c.heading} />
        <p className="c-text" data-reveal>{c.text}</p>
        <ul className="c-list">
          {getLinks(c).map(({ label, Icon, href, text, ext }) => (
            <li key={label} data-reveal>
              {href ? <a href={href} {...(ext && { target: '_blank', rel: 'noopener noreferrer' })}><Icon size={20} /><b>{label}</b><span>{text}</span><ArrowUpRight size={18} /></a>
                : <div className="unset"><Icon size={20} /><b>{label}</b><span>{text}</span></div>}
            </li>
          ))}
        </ul>
        <p className="foot">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </section>
  )
}
