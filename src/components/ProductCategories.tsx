import { Link } from 'react-router-dom'
import {
  Droplets,
  DoorOpen,
  Layout,
  PanelTop,
  PanelLeftClose,
  MoveHorizontal,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useRef, useEffect, useState } from 'react'
import './ProductCategories.css'

const categories: Array<{
  id: string
  title: string
  description: string
  path: string
  icon: LucideIcon
  image: string
}> = [
  {
    id: 'shower-cubicles',
    title: 'Shower Cubicles',
    description: 'Economical to super premium—clear, fluted, designer glass with multiple frame options.',
    path: '/products#shower-cubicles',
    icon: Droplets,
    image: '/shower-economical.png', // Replace with category showcase image
  },
  {
    id: 'swing-doors',
    title: 'Swing Doors',
    description: 'Economical to fully framed anodised aluminium—glass and frame options to suit.',
    path: '/products#swing-doors',
    icon: DoorOpen,
    image: '/swing-door-economical.png', // Replace with category showcase image
  },
  {
    id: 'invisible-pocket-doors',
    title: 'Invisible/ Pocket Doors',
    description: 'Space-saving invisible and pocket door solutions for residential and commercial.',
    path: '/products#invisible-pocket-doors',
    icon: Layout,
    image: '/pocket-door-economical.png', // Replace with category showcase image
  },
  {
    id: 'telescopic-sliding-door',
    title: 'Telescopic Sliding Door',
    description: 'Multi-panel telescopic sliding door systems for wide openings.',
    path: '/products#telescopic-sliding-door',
    icon: PanelTop,
    image: '/telescopic-economical.png', // Replace with category showcase image
  },
  {
    id: 'slide-fold-sliding-doors',
    title: 'Slide & Fold Sliding Doors',
    description: 'Slide and fold panels for wide openings—economical to super premium.',
    path: '/products#slide-fold-sliding-doors',
    icon: PanelLeftClose,
    image: '/slide-fold-economical.png', // Replace with category showcase image
  },
  {
    id: 'synchro-sliding-doors',
    title: 'Synchro Sliding Doors',
    description: 'Both panels move together smoothly—economical to super premium.',
    path: '/products#synchro-sliding-doors',
    icon: MoveHorizontal,
    image: '/synchro-economical.png', // Replace with category showcase image
  },
  {
    id: 'mandir-partitions',
    title: 'Mandir Partitions',
    description: 'Partition and sliding systems for mandir spaces—with optional bells and varied glass.',
    path: '/products#mandir-partitions',
    icon: Sparkles,
    image: '/mandir-economical.png', // Replace with category showcase image
  },
]

export default function ProductCategories() {
  const { ref, inView } = useScrollAnimation<HTMLHeadingElement>()
  const gridRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())

  useEffect(() => {
    if (!gridRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(gridRef.current?.children || []).indexOf(entry.target)
            setVisibleCards((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const cards = gridRef.current.children
    Array.from(cards).forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" className="product-categories section">
      <h2 className={`section-title product-categories-title ${inView ? 'reveal' : ''}`} ref={ref}>
        Product Categories
      </h2>
      <div className="product-categories-grid" ref={gridRef}>
        {categories.map((cat, index) => {
          const Icon = cat.icon
          const isVisible = visibleCards.has(index)
          return (
            <Link
              key={cat.id}
              to={cat.path}
              className={`product-category-card ${isVisible ? 'card-visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-category-image-wrap">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="product-category-image"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="product-category-overlay" />
                <div className="product-category-icon-float" aria-hidden>
                  <Icon size={28} strokeWidth={2} />
                </div>
              </div>
              <div className="product-category-content">
                <span className="product-category-icon" aria-hidden>
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="product-category-title">{cat.title}</h3>
                <p className="product-category-desc">{cat.description}</p>
                <span className="product-category-link">
                  <span>View range</span>
                  <span className="product-category-arrow">→</span>
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
