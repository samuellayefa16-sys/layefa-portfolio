import { useEffect, useRef } from 'react'
import gsap from 'gsap'
export default function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef()
  useEffect(() => {
    if (!matchMedia('(pointer: fine)').matches) return
    const el = ref.current
    const mv = (e) => { const b = el.getBoundingClientRect(); gsap.to(el, { x: (e.clientX - b.left - b.width / 2) * strength, y: (e.clientY - b.top - b.height / 2) * strength, duration: 0.4, ease: 'power3.out' }) }
    const lv = () => gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,0.4)' })
    el.addEventListener('mousemove', mv); el.addEventListener('mouseleave', lv)
    return () => { el.removeEventListener('mousemove', mv); el.removeEventListener('mouseleave', lv) }
  }, [])
  return <span ref={ref} className="mag">{children}</span>
}
