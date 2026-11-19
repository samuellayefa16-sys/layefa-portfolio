import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { site } from '../data/portfolio'
import { reduced } from '../lib/scroll'
export default function Loader({ onDone }) {
  const ref = useRef(), num = useRef()
  useEffect(() => {
    if (reduced()) { ref.current.style.display = 'none'; onDone(); return }
    const o = { v: 0 }
    const tl = gsap.timeline({ onComplete: () => (ref.current.style.display = 'none') })
    tl.to(o, { v: 100, duration: 1.2, ease: 'power2.inOut', onUpdate: () => (num.current.textContent = String(Math.round(o.v)).padStart(3, '0')) })
      .to(ref.current, { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, '+=0.1')
      .call(onDone, null, '-=0.45')
    return () => tl.kill()
  }, [])
  return <div className="loader" ref={ref} aria-hidden="true"><span>{site.logo}</span><b ref={num}>000</b></div>
}
