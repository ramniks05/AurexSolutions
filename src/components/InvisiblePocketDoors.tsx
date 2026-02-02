import { useScrollAnimation } from '../hooks/useScrollAnimation'
import FrameColourSwatches from './FrameColourSwatches'
import './InvisiblePocketDoors.css'

const products = [
  {
    id: 'economical-pocket-door',
    title: 'Economical Pocket Doors',
    image: '/pocket-door-economical.png',
    glass: ['Clear', 'Frosted', 'Tinted'],
    frame: ['Champagne', 'Black', 'Bronze', 'Brush Gold', 'Graphite Grey', 'Rose Gold'],
  },
  {
    id: 'premium-pocket-door',
    title: 'Premium Pocket Doors',
    image: '/pocket-door-premium.png',
    glass: ['Fluted', 'Tinted', 'Designer'],
    frame: ['Champagne', 'Black', 'Bronze', 'Graphite Grey', 'Rose Gold'],
  },
  {
    id: 'super-premium-pocket-door',
    title: 'Super Premium Pocket Doors',
    image: '/pocket-door-super-premium.png',
    glass: ['Fluted', 'Fabric', 'Designer'],
    frame: ['Champagne', 'Black', 'Bronze', 'Graphite Grey', 'Rose Gold', 'Brush Gold'],
    extra: [
      'Sliding glass door system with minimal hardware, featuring a top sliding aluminium track and 8 mm toughened clear glass.',
      'Anodised aluminium outer frame with different glass and handle options can be used, along with designs created using Georgian bars and various glass patterns.',
      'Anodised aluminium full-frame sliding doors with a concealed sliding & soft close mechanism. Multiple glass options can be used. Divider profiles and various glass shapes & types can be incorporated. Different design styles, such as Curved, French grid, & Geometrical patterns, can be created.',
    ],
  },
]

type Props = { imageRight?: boolean }

export default function InvisiblePocketDoors({ imageRight }: Props) {
  const { ref, inView } = useScrollAnimation<HTMLHeadingElement>()

  return (
    <section id="invisible-pocket-doors" className={`invisible-pocket-doors section ${imageRight ? 'layout-alt' : ''}`}>
      <h2 className={`section-title invisible-pocket-doors-title ${inView ? 'reveal' : ''}`} ref={ref}>
        Invisible/ Pocket Doors
      </h2>
      <p className="invisible-pocket-doors-intro">
        Aurex Solutions pocket door range—from economical to super premium, with sliding aluminium track and anodised aluminium options.
      </p>
      <div className="invisible-pocket-doors-grid">
        {products.map((product) => (
          <article key={product.id} className="pocket-door-card">
            <div className="pocket-door-image-wrap">
              <img
                src={product.image}
                alt={product.title}
                className="pocket-door-image"
              />
            </div>
            <div className="pocket-door-body">
              <h3 className="pocket-door-title">{product.title}</h3>
              <div className="pocket-door-specs">
                <p>
                  <strong>Glass options:</strong>{' '}
                  <span className="pocket-door-values">{product.glass.join(', ')}</span>
                </p>
                <p>
                  <strong>Frame colour options:</strong>
                  <FrameColourSwatches colours={product.frame} />
                </p>
                {'extra' in product && product.extra && (
                  <ul className="pocket-door-extra">
                    {(product.extra as string[]).map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
