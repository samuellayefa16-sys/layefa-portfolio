import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { reduced } from '../lib/scroll'
// Character-by-character reveal. hero=true plays on load, otherwise on scroll.
export default function Split({ text, as: Tag = 'h2', className = '', hero = false, ready = true }) {
  const ref = useRef()
  useEffect(() => {
    if (!ready || reduced()) return
    const ctx = gsap.context(() => {
      const v = { yPercent: 115, duration: 0.9, ease: 'power4.out', stagger: 0.015 }
      gsap.from(ref.current.querySelectorAll('.ch'), hero ? { ...v, delay: 0.25 } : { ...v, scrollTrigger: { trigger: ref.current, start: 'top 88%' } })
    }, ref)
    return () => ctx.revert()
  }, [ready])
  return (
    <Tag ref={ref} className={`split ${className}`} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span className="w" aria-hidden="true" key={i}>{[...w].map((c, j) => <span className="ch" key={j}>{c}</span>)}</span>
      ))}
    </Tag>
  )
}
