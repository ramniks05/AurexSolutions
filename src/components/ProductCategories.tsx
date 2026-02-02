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
import './ProductCategories.css'

const categories: Array<{
  id: string
  title: string
  description: string
  path: string
  icon: LucideIcon
}> = [
  {
    id: 'shower-cubicles',
    title: 'Shower Cubicles',
    description: 'Economical to super premium—clear, fluted, designer glass with multiple frame options.',
    path: '/products#shower-cubicles',
    icon: Droplets,
  },
  {
    id: 'swing-doors',
    title: 'Swing Doors',
    description: 'Economical to fully framed anodised aluminium—glass and frame options to suit.',
    path: '/products#swing-doors',
    icon: DoorOpen,
  },
  {
    id: 'invisible-pocket-doors',
    title: 'Invisible/ Pocket Doors',
    description: 'Space-saving invisible and pocket door solutions for residential and commercial.',
    path: '/products#invisible-pocket-doors',
    icon: Layout,
  },
  {
    id: 'telescopic-sliding-door',
    title: 'Telescopic Sliding Door',
    description: 'Multi-panel telescopic sliding door systems for wide openings.',
    path: '/products#telescopic-sliding-door',
    icon: PanelTop,
  },
  {
    id: 'slide-fold-sliding-doors',
    title: 'Slide & Fold Sliding Doors',
    description: 'Slide and fold panels for wide openings—economical to super premium.',
    path: '/products#slide-fold-sliding-doors',
    icon: PanelLeftClose,
  },
  {
    id: 'synchro-sliding-doors',
    title: 'Synchro Sliding Doors',
    description: 'Both panels move together smoothly—economical to super premium.',
    path: '/products#synchro-sliding-doors',
    icon: MoveHorizontal,
  },
  {
    id: 'mandir-partitions',
    title: 'Mandir Partitions',
    description: 'Partition and sliding systems for mandir spaces—with optional bells and varied glass.',
    path: '/products#mandir-partitions',
    icon: Sparkles,
  },
]

export default function ProductCategories() {
  const { ref, inView } = useScrollAnimation<HTMLHeadingElement>()

  return (
    <section id="products" className="product-categories section">
      <h2 className={`section-title product-categories-title ${inView ? 'reveal' : ''}`} ref={ref}>
        Product Categories
      </h2>
      <div className="product-categories-grid">
        {categories.map((cat) => {
          const Icon = cat.icon
          return (
            <Link
              key={cat.id}
              to={cat.path}
              className="product-category-card"
            >
              <span className="product-category-icon" aria-hidden>
                <Icon size={22} strokeWidth={1.75} />
              </span>
              <h3 className="product-category-title">{cat.title}</h3>
              <p className="product-category-desc">{cat.description}</p>
              <span className="product-category-link">View range →</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
