import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import LiquidBG from './components/LiquidBG'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import { About, Skills } from './components/Sections'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { reduced } from './lib/scroll'
gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    if (reduced()) return
    const lenis = new Lenis(); window.__lenis = lenis
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (t) => lenis.raf(t * 1000)
    gsap.ticker.add(tick); gsap.ticker.lagSmoothing(0)
    return () => { gsap.ticker.remove(tick); lenis.destroy(); window.__lenis = null }
  }, [])
  useEffect(() => {
    if (!ready || reduced()) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((el) =>
        gsap.from(el, { y: 40, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } }))
    })
    return () => ctx.revert()
  }, [ready])
  useEffect(() => {
    // Web fonts and images change layout after first paint; recalc scroll trigger positions.
    const refresh = () => ScrollTrigger.refresh()
    document.fonts?.ready.then(refresh)
    addEventListener('load', refresh)
    return () => removeEventListener('load', refresh)
  }, [])
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <LiquidBG />
      <Loader onDone={() => setReady(true)} />
      <Cursor />
      <Nav />
      <main>
        <Hero ready={ready} />
        <About ready={ready} />
        <Skills ready={ready} />
        <Projects ready={ready} />
        <Contact ready={ready} />
      </main>
    </>
  )
}
