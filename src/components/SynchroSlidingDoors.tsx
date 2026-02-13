import { useScrollAnimation } from '../hooks/useScrollAnimation'
import FrameColourSwatches from './FrameColourSwatches'
import ProductImageWithLightbox from './ProductImageWithLightbox'
import './SynchroSlidingDoors.css'

const products = [
  {
    id: 'economical-synchro',
    title: 'Economical Synchro Slider',
    image: '/synchro-economical.png',
    glass: ['Clear', 'Frosted', 'Tinted'],
    frame: ['Champagne', 'Black', 'Bronze', 'Brush Gold', 'Graphite Grey', 'Rose Gold'],
    extra: 'Anodised aluminium synchro sliding system where both panels move together smoothly. Comes with clear toughened glass and a slim, minimal frame.',
  },
  {
    id: 'premium-synchro',
    title: 'Premium Synchro Slider',
    image: '/synchro-premium.png',
    glass: ['Fluted', 'Tinted', 'Designer'],
    frame: ['Champagne', 'Black', 'Bronze', 'Graphite Grey', 'Rose Gold', 'Brush Gold'],
    extra: 'Anodised aluminium synchro sliding door with a slim frame and soft close mechanism. Different glasses can be used, along with designs created using Georgian bars and various glass patterns.',
  },
  {
    id: 'super-premium-synchro',
    title: 'Super Premium Synchro Slider',
    image: '/synchro-super-premium.png',
    glass: ['Fluted', 'Tinted', 'Designer', '5D glasses'],
    frame: ['Champagne', 'Black', 'Bronze', 'Graphite Grey', 'Rose Gold', 'Brush Gold'],
    extra: 'Anodised aluminium synchro slider with concealed & soft close mechanism. Multiple glass options can be used in a single panel. Divider profiles and various glass shapes and types can be incorporated. Different design styles, such as Curved, French grid, and Geometrical patterns, can be created.',
  },
]

type Props = { imageRight?: boolean }

export default function SynchroSlidingDoors({ imageRight }: Props) {
  const { ref, inView } = useScrollAnimation<HTMLHeadingElement>()

  return (
    <section id="synchro-sliding-doors" className={`synchro-sliding-doors section ${imageRight ? 'layout-alt' : ''}`}>
      <h2 className={`section-title synchro-sliding-doors-title ${inView ? 'reveal' : ''}`} ref={ref}>
        Synchro Sliding Doors
      </h2>
      <p className="synchro-sliding-doors-intro">
        Aurex Solutions synchro sliding range—both panels move together smoothly, from economical to super premium.
      </p>
      <div className="synchro-sliding-doors-grid">
        {products.map((product) => (
          <article key={product.id} className="synchro-door-card">
            <div className="synchro-door-image-wrap">
              <ProductImageWithLightbox
                src={product.image}
                alt={product.title}
                imageClassName="synchro-door-image"
              />
            </div>
            <div className="synchro-door-body">
              <h3 className="synchro-door-title">{product.title}</h3>
              <div className="synchro-door-specs">
                <p>
                  <strong>Glass options:</strong>{' '}
                  <span className="synchro-door-values">{product.glass.join(', ')}</span>
                </p>
                <p>
                  <strong>Frame colour options:</strong>
                  <FrameColourSwatches colours={product.frame} />
                </p>
                {'extra' in product && product.extra && (
                  <p className="synchro-door-extra">{product.extra}</p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
