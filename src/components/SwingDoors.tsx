import { useScrollAnimation } from '../hooks/useScrollAnimation'
import FrameColourSwatches from './FrameColourSwatches'
import './SwingDoors.css'

const products = [
  {
    id: 'economical-swing-door',
    title: 'Economical Swing Door',
    image: '/swing-door-economical.png',
    glass: ['Clear', 'Frosted', 'Tinted'],
    frame: ['Black', 'SS', 'Gold'],
  },
  {
    id: 'premium-swing-door',
    title: 'Premium Swing Door',
    image: '/swing-door-premium.png',
    glass: ['Fluted', 'Tinted', 'Designer'],
    frame: ['Champagne', 'Brush Gold', 'Black', 'Rosegold', 'Bronze', 'Graphite Grey', 'Rose Gold'],
  },
  {
    id: 'fully-framed-door',
    title: 'Fully Framed Anodised Aluminium Door',
    image: '/swing-door-fully-framed.png',
    glass: ['Fluted', 'Fabric', 'Designer', '5D glasses'],
    frame: ['Champagne', 'Brush Gold', 'Black', 'Rosegold', 'Bronze', 'Graphite Grey'],
    extra: "Fully framed anodised aluminium doors with multiple glasses—Fabric, designer 5D glasses. Use of Divider Profiles for various shapes and types of glass can be incorporated. Handle options: Curved handle, 'H' handle, mortised handle, sleek long handle with locking system.",
  },
]

type Props = { imageRight?: boolean }

export default function SwingDoors({ imageRight }: Props) {
  const { ref, inView } = useScrollAnimation<HTMLHeadingElement>()

  return (
    <section id="swing-doors" className={`swing-doors section ${imageRight ? 'layout-alt' : ''}`}>
      <h2 className={`section-title swing-doors-title ${inView ? 'reveal' : ''}`} ref={ref}>
        Swing Doors
      </h2>
      <p className="swing-doors-intro">
        Aurex Solutions swing door range—from economical to fully framed anodised aluminium, with a variety of glass and frame options.
      </p>
      <div className="swing-doors-grid">
        {products.map((product) => (
          <article key={product.id} className="swing-door-card">
            <div className="swing-door-image-wrap">
              <img
                src={product.image}
                alt={product.title}
                className="swing-door-image"
              />
            </div>
            <div className="swing-door-body">
              <h3 className="swing-door-title">{product.title}</h3>
              <div className="swing-door-specs">
                <p>
                  <strong>Glass options:</strong>{' '}
                  <span className="swing-door-values">{product.glass.join(', ')}</span>
                </p>
                <p>
                  <strong>Frame colour options:</strong>
                  <FrameColourSwatches colours={product.frame} />
                </p>
                {'extra' in product && product.extra && (
                  <p className="swing-door-extra">{product.extra}</p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
