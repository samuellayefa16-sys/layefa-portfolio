import { ArrowUpRight, Github } from 'lucide-react'
import { site } from '../data/portfolio'
import { isSet } from '../lib/links'
import Split from './Split'
import ParallaxImage from './ParallaxImage'
export default function Projects({ ready }) {
  const p = site.projects
  return (
    <section id="projects" className="sec">
      <div className="wrap">
        <p className="eyebrow">{p.label}</p><Split ready={ready} className="h2 narrow" text={p.heading} />
        <div className="proj-grid">
          {p.items.map((it, i) => (
            <article className="proj" key={it.name} data-reveal>
              <div className="proj-img"><ParallaxImage delay={-i * 7} src={it.image} alt={`${it.name} screenshot`} label={it.name} position={it.position || '50% 75%'} /><span className={`status ${it.status.toLowerCase()}`}>{it.status}</span></div>
              <h3>{it.name}</h3>
              <p>{it.description}</p>
              {it.features.length > 0 && <ul className="feat">{it.features.map((f) => <li key={f}>{f}</li>)}</ul>}
              <div className="tech">{it.tech.map((t) => <span key={t}>{t}</span>)}</div>
              <div className="proj-links">
                {isSet(it.live) && <a href={it.live} target="_blank" rel="noopener noreferrer">View Project <ArrowUpRight size={16} /></a>}
                {isSet(it.github) && <a href={it.github} target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub</a>}
                {!isSet(it.live) && !isSet(it.github) && <small>No public link yet</small>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
