import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { reduced } from '../lib/scroll'
import SafeImage from './SafeImage'
// Cinematic frame: slow CSS zoom + pan (.kb) inside a layer that drifts with scroll (parallax).
export default function ParallaxImage({ delay = 0, ...img }) {
  const frame = useRef(), layer = useRef()
  useEffect(() => {
    if (reduced()) return
    const ctx = gsap.context(() => {
      gsap.fromTo(layer.current, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: frame.current, start: 'top bottom', end: 'bottom top', scrub: true } })
    }, frame)
    return () => ctx.revert()
  }, [])
  return <div className="pimg kb" ref={frame} style={{ '--d': `${delay}s` }}><div className="pv" ref={layer}><SafeImage {...img} /></div></div>
}
