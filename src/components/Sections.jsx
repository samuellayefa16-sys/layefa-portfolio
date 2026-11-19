import { site } from '../data/portfolio'
import Split from './Split'
const LV = { 3: 'Practicing', 2: 'Familiar', 1: 'Learning' }
export function About({ ready }) {
  const a = site.about
  return (
    <section id="about" className="sec">
      <div className="wrap about">
        <div><p className="eyebrow">{a.label}</p><Split ready={ready} className="h2" text={a.heading} /></div>
        <div className="about-text">{a.paragraphs.map((p, i) => <p key={i} data-reveal className={i === 0 ? 'lead' : ''}>{p}</p>)}</div>
      </div>
    </section>
  )
}
export function Skills({ ready }) {
  const s = site.skills
  return (
    <section id="skills" className="sec alt">
      <div className="wrap">
        <p className="eyebrow">{s.label}</p><Split ready={ready} className="h2 narrow" text={s.heading} />
        {s.groups.map((g) => (
          <div className="sk-group" key={g.title} data-reveal>
            <h3>{g.title}</h3>
            <ul>{g.items.map(([n, l]) => (
              <li key={n}><span>{n}</span><em>{LV[l]}<b aria-hidden="true">{[1, 2, 3].map((d) => <i key={d} className={d <= l ? 'on' : ''} />)}</b></em></li>
            ))}</ul>
          </div>
        ))}
      </div>
    </section>
  )
}
