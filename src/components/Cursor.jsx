import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { reduced } from '../lib/scroll'
export default function Cursor() {
  const ref = useRef()
  useEffect(() => {
    if (!matchMedia('(pointer: fine)').matches || reduced()) { ref.current.style.display = 'none'; return }
    const x = gsap.quickTo(ref.current, 'x', { duration: 0.35 }), y = gsap.quickTo(ref.current, 'y', { duration: 0.35 })
    const mv = (e) => { x(e.clientX); y(e.clientY); ref.current.classList.toggle('big', !!e.target.closest('a,button,.proj')) }
    window.addEventListener('mousemove', mv)
    return () => window.removeEventListener('mousemove', mv)
  }, [])
  return <div className="cursor" ref={ref} aria-hidden="true" />
}
