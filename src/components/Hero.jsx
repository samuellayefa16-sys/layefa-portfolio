import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { site } from '../data/portfolio'
import { goTo, reduced } from '../lib/scroll'
import Split from './Split'
import Magnetic from './Magnetic'
import SafeImage from './SafeImage'
export default function Hero({ ready }) {
  const root = useRef()
  const { hero, images } = site
  useEffect(() => {
    if (!ready || reduced()) return
    const ctx = gsap.context(() => {
      // intro: portrait fades up out of the dark with a slow settle
      gsap.from('.h-portrait', { opacity: 0, scale: 1.18, duration: 2.4, ease: 'power3.out' })
      gsap.from('.h-label', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' })
      gsap.from('.h-sub', { y: 30, opacity: 0, duration: 0.9, delay: 1.0, ease: 'power3.out' })
      gsap.from('.h-tags span, .h-cta .mag', { y: 24, opacity: 0, duration: 0.8, delay: 1.2, stagger: 0.1, ease: 'power3.out' })
      // scroll parallax: background drifts slower than the text, text fades as you leave
      const st = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true }
      gsap.to('.h-stage', { yPercent: 12, ease: 'none', scrollTrigger: st })
      gsap.to('.h-content', { yPercent: -8, opacity: 0.2, ease: 'none', scrollTrigger: st })
      // mouse parallax (desktop only): layers move gently in opposite directions
      if (matchMedia('(pointer: fine)').matches) {
        const sx = gsap.quickTo('.h-stage', 'x', { duration: 1.2, ease: 'power3.out' }), sy = gsap.quickTo('.h-stage', 'y', { duration: 1.2, ease: 'power3.out' })
        const cx = gsap.quickTo('.h-content', 'x', { duration: 1.2, ease: 'power3.out' }), cy = gsap.quickTo('.h-content', 'y', { duration: 1.2, ease: 'power3.out' })
        const mv = (e) => { const nx = e.clientX / innerWidth - 0.5, ny = e.clientY / innerHeight - 0.5; sx(nx * -22); sy(ny * -14); cx(nx * 8); cy(ny * 5) }
        addEventListener('mousemove', mv)
        return () => removeEventListener('mousemove', mv)
      }
    }, root)
    return () => ctx.revert()
  }, [ready])
  return (
    <>
      <section id="home" className="hero" ref={root} style={{ '--hero-bg': `url(${images.heroBackground})` }}>
        <div className="h-stage" aria-hidden="false">
          <figure className="h-portrait"><SafeImage src={images.profile} alt={`Portrait of ${site.name}`} label="Your portrait" position={images.profilePosition} priority /></figure>
        </div>
        <div className="h-content wrap">
          <p className="h-label eyebrow">{hero.label}</p>
          <Split as="h1" hero ready={ready} className="h1" text={hero.heading} />
          <p className="h-sub">{hero.text}</p>
          <div className="h-tags">{hero.tags.map((t) => <span key={t}>{t}</span>)}</div>
          <div className="h-cta">
            <Magnetic><button className="btn primary" onClick={() => goTo('#projects')}>{hero.cta[0]}</button></Magnetic>
            <Magnetic><button className="btn" onClick={() => goTo('#contact')}>{hero.cta[1]}</button></Magnetic>
          </div>
        </div>
      </section>
      <div className="marquee" aria-hidden="true"><div>{[0, 1, 2, 3].map((k) => <span key={k}>{hero.marquee.map((m) => `${m} ✳ `).join('')}</span>)}</div></div>
    </>
  )
}
