import { useScrollAnimation } from '../hooks/useScrollAnimation'
import FrameColourSwatches from './FrameColourSwatches'
import ProductImageWithLightbox from './ProductImageWithLightbox'
import './TelescopicDoors.css'

const products = [
  {
    id: 'economical-telescopic',
    title: 'Economical Telescopic Doors',
    image: '/telescopic-economical.png',
    glass: ['Clear', 'Frosted', 'Tinted'],
    frame: ['Champagne', 'Black', 'Bronze', 'Brush Gold', 'Graphite Grey', 'Rose Gold'],
    extra: 'Multi-panel sliding system with basic telescopic movement. Aluminium top track, allowing two or more panels to slide in sequence for wider openings.',
  },
  {
    id: 'premium-telescopic',
    title: 'Premium Telescopic Doors',
    image: '/telescopic-premium.png',
    glass: ['Fluted', 'Tinted', 'Designer'],
    frame: ['Champagne', 'Black', 'Bronze', 'Graphite Grey', 'Rose Gold', 'Brush Gold'],
    extra: 'Anodised aluminium-framed telescopic doors with soft-close sliding system. Different glasses can be used, along with designs created using Georgian bars and various glass patterns.',
  },
  {
    id: 'super-premium-telescopic',
    title: 'Super Premium Telescopic Doors',
    image: '/telescopic-super-premium.png',
    glass: ['Fluted', 'Fabric', 'Designer', '5D glasses'],
    frame: ['Champagne', 'Black', 'Bronze', 'Graphite Grey', 'Rose Gold', 'Brush Gold'],
    extra: 'Anodised Aluminium full-frame telescopic sliding system with concealed mechanism. Multiple glass options can be used in a single panel. Divider profiles and various glass shapes and types can be incorporated. Different design styles, such as Curved, French grid, and Geometrical patterns, can be created.',
  },
]

type Props = { imageRight?: boolean }

export default function TelescopicDoors({ imageRight }: Props) {
  const { ref, inView } = useScrollAnimation<HTMLHeadingElement>()

  return (
    <section id="telescopic-sliding-door" className={`telescopic-doors section ${imageRight ? 'layout-alt' : ''}`}>
      <h2 className={`section-title telescopic-doors-title ${inView ? 'reveal' : ''}`} ref={ref}>
        Telescopic Sliding Door
      </h2>
      <p className="telescopic-doors-intro">
        Aurex Solutions telescopic door range—multi-panel sliding systems from economical to super premium for wider openings.
      </p>
      <div className="telescopic-doors-grid">
        {products.map((product) => (
          <article key={product.id} className="telescopic-door-card">
            <div className="telescopic-door-image-wrap">
              <ProductImageWithLightbox
                src={product.image}
                alt={product.title}
                imageClassName="telescopic-door-image"
              />
            </div>
            <div className="telescopic-door-body">
              <h3 className="telescopic-door-title">{product.title}</h3>
              <div className="telescopic-door-specs">
                <p>
                  <strong>Glass options:</strong>{' '}
                  <span className="telescopic-door-values">{product.glass.join(', ')}</span>
                </p>
                <p>
                  <strong>Frame colour options:</strong>
                  <FrameColourSwatches colours={product.frame} />
                </p>
                {'extra' in product && product.extra && (
                  <p className="telescopic-door-extra">{product.extra}</p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
