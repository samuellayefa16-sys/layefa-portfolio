import { useState } from 'react'
// Shows the image; if the file is missing, shows a replaceable placeholder.
// priority = above-the-fold image: load immediately instead of lazily.
export default function SafeImage({ src, alt, label, position = '50% 50%', priority = false }) {
  const [bad, setBad] = useState(false)
  if (bad) return <div className="ph" role="img" aria-label={alt}><span>{label || alt}</span><small>Replace: {src}</small></div>
  return <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} fetchpriority={priority ? 'high' : undefined} decoding="async" onError={() => setBad(true)} style={{ objectFit: 'cover', objectPosition: position }} />
}
