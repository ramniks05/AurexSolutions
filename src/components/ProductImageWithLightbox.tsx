import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Expand } from 'lucide-react'
import './ProductImageWithLightbox.css'

type Props = {
  src: string
  alt: string
  imageClassName: string
}

export default function ProductImageWithLightbox({ src, alt, imageClassName }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onEscape)
      document.body.style.overflow = ''
    }
  }, [open])

  const lightbox = open && createPortal(
    <div
      className="product-image-lightbox-overlay"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="View full image"
    >
      <div className="product-image-lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="product-image-lightbox-close"
          onClick={() => setOpen(false)}
          aria-label="Close"
        >
          ×
        </button>
        <img src={src} alt={alt} className="product-image-lightbox-img" />
      </div>
    </div>,
    document.body
  )

  return (
    <>
      <img src={src} alt={alt} className={imageClassName} />
      <button
        type="button"
        className="product-image-view-full"
        onClick={() => setOpen(true)}
        aria-label="View full image"
        title="View full image"
      >
        <Expand size={20} strokeWidth={2.5} />
      </button>
      {lightbox}
    </>
  )
}
