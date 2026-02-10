import { useScrollAnimation } from '../hooks/useScrollAnimation'
import FrameColourSwatches from './FrameColourSwatches'
import './SlideAndFoldDoors.css'

const products = [
  {
    id: 'economical-slide-fold',
    title: 'Economical Slide & Fold Doors',
    image: '/slide-fold-economical.png',
    glass: ['Clear', 'Frosted', 'Tinted'],
    frame: ['Champagne', 'Black', 'Bronze', 'Brush Gold', 'Graphite Grey', 'Rose Gold'],
    extra: 'Anodised aluminium slide and fold system with clear toughened glass panels. Panels slide smoothly and fold to one side, creating a wide opening. Simple and functional hardware.',
  },
  {
    id: 'premium-slide-fold',
    title: 'Premium Slide & Fold Doors',
    image: '/slide-fold-premium.png',
    glass: ['Fluted', 'Tinted', 'Designer'],
    frame: ['Champagne', 'Black', 'Bronze', 'Graphite Grey', 'Rose Gold', 'Brush Gold'],
    extra: 'Anodised aluminium framed slide and fold system with smooth folding and sliding. Different glasses can be used, along with designs created using Georgian bars and various glass patterns.',
  },
  {
    id: 'super-premium-slide-fold',
    title: 'Super Premium Slide & Fold Doors',
    image: '/slide-fold-super-premium.png',
    glass: ['Fluted', 'Fabric', 'Designer', '5D glasses'],
    frame: ['Champagne', 'Black', 'Bronze', 'Graphite Grey', 'Rose Gold', 'Brush Gold'],
    extra: 'Anodised aluminium full-framed slide and fold system with concealed mechanism. Multiple glass options can be used in a single panel. Divider profiles and various glass shapes and types can be incorporated. Multiple design styles, such as Curved, French grid, and Geometrical patterns, can be created.',
  },
]

type Props = { imageRight?: boolean }

export default function SlideAndFoldDoors({ imageRight }: Props) {
  const { ref, inView } = useScrollAnimation<HTMLHeadingElement>()

  return (
    <section id="slide-fold-sliding-doors" className={`slide-fold-doors section section-alt ${imageRight ? 'layout-alt' : ''}`}>
      <h2 className={`section-title slide-fold-doors-title ${inView ? 'reveal' : ''}`} ref={ref}>
        Slide & Fold Sliding Doors
      </h2>
      <p className="slide-fold-doors-intro">
        Aurex Solutions slide and fold range—panels slide and fold to one side for wide openings, from economical to super premium.
      </p>
      <div className="slide-fold-doors-grid">
        {products.map((product) => (
          <article key={product.id} className="slide-fold-door-card">
            <div className="slide-fold-door-image-wrap">
              <img
                src={product.image}
                alt={product.title}
                className="slide-fold-door-image"
              />
            </div>
            <div className="slide-fold-door-body">
              <h3 className="slide-fold-door-title">{product.title}</h3>
              <div className="slide-fold-door-specs">
                <p>
                  <strong>Glass options:</strong>{' '}
                  <span className="slide-fold-door-values">{product.glass.join(', ')}</span>
                </p>
                <p>
                  <strong>Frame colour options:</strong>
                  <FrameColourSwatches colours={product.frame} />
                </p>
                {'extra' in product && product.extra && (
                  <p className="slide-fold-door-extra">{product.extra}</p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
