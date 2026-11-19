import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Menu, X } from 'lucide-react'
import { site } from '../data/portfolio'
import { goTo, setScrollLock } from '../lib/scroll'
import { getLinks } from '../lib/links'
const links = [['Home', '#home'], ['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact']]
export default function Nav() {
  const [open, setOpen] = useState(false)
  const ov = useRef(), first = useRef(true), btn = useRef()
  useEffect(() => {
    if (first.current) { first.current = false; return }
    setScrollLock(open)
    const items = ov.current.querySelectorAll('.ov-link span, .ov-foot')
    if (open) {
      gsap.to(ov.current, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8, ease: 'power4.inOut' })
      gsap.fromTo(items, { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.07, delay: 0.35, ease: 'power3.out' })
    } else { gsap.to(ov.current, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.6, ease: 'power4.inOut' }); btn.current.focus() }
  }, [open])
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setOpen(false)
    addEventListener('keydown', k); return () => removeEventListener('keydown', k)
  }, [])
  const go = (h) => (e) => { e.preventDefault(); setOpen(false); setTimeout(() => goTo(h), 450) }
  return (
    <>
      <header className="nav">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); goTo('#home') }}>{site.logo}</a>
        <span className="avail"><i />{site.availability}</span>
        <button ref={btn} className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}><span>Menu</span><Menu size={22} /></button>
      </header>
      <div className="overlay" ref={ov} role="dialog" aria-modal="true" aria-label="Navigation" {...(!open && { inert: '' })}>
        <button className="menu-btn close" onClick={() => setOpen(false)} aria-label="Close menu"><span>Close</span><X size={22} /></button>
        <nav>{links.map(([l, h]) => <a key={h} href={h} className="ov-link" onClick={go(h)}><span>{l}</span></a>)}</nav>
        <div className="ov-foot">{getLinks(site.contact).map(({ label, href, ext }) => href ? <a key={label} href={href} {...(ext && { target: '_blank', rel: 'noopener noreferrer' })}>{label}</a> : null)}</div>
      </div>
    </>
  )
}
