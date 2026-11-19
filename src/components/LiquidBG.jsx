import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { reduced } from '../lib/scroll'
const frag = `precision mediump float;uniform float t;uniform vec2 r;uniform vec2 m;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
void main(){vec2 uv=gl_FragCoord.xy/r;vec2 p=uv*vec2(r.x/r.y,1.)*2.2+m*.35;
float a=n(p+t*.07);float b=n(p*1.5-a*1.6+t*.05);float c=n(p*2.+b*2.2-t*.04);
float v=smoothstep(.3,.95,c*.6+b*.4);
vec3 col=mix(vec3(.063),vec3(.095),v)+vec3(.02,.09,.065)*pow(v,3.);
gl_FragColor=vec4(col,1.);}`
export default function LiquidBG() {
  const ref = useRef()
  useEffect(() => {
    let renderer
    try { renderer = new THREE.WebGLRenderer({ canvas: ref.current, antialias: false, powerPreference: 'low-power' }) } catch { return }
    const small = innerWidth < 768
    renderer.setPixelRatio(small ? 0.6 : Math.min(devicePixelRatio, 1))
    const scene = new THREE.Scene(), cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const u = { t: { value: 0 }, r: { value: new THREE.Vector2() }, m: { value: new THREE.Vector2() } }
    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), new THREE.ShaderMaterial({ uniforms: u, vertexShader: 'void main(){gl_Position=vec4(position,1.);}', fragmentShader: frag })))
    const size = () => { renderer.setSize(innerWidth, innerHeight, false); u.r.value.set(ref.current.width, ref.current.height) }
    size(); addEventListener('resize', size)
    const mouse = new THREE.Vector2(), mv = (e) => mouse.set(e.clientX / innerWidth - 0.5, 0.5 - e.clientY / innerHeight)
    if (!small) addEventListener('mousemove', mv)
    let raf, last = 0
    const loop = (now) => {
      raf = requestAnimationFrame(loop)
      if (document.hidden || now - last < 33) return // ~30fps cap
      last = now; u.t.value = now / 1000; u.m.value.lerp(mouse, 0.05); renderer.render(scene, cam)
    }
    if (reduced()) renderer.render(scene, cam); else raf = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', size); removeEventListener('mousemove', mv); renderer.dispose() }
  }, [])
  return <canvas ref={ref} className="liquid" aria-hidden="true" />
}
