import { useScrollAnimation } from '../hooks/useScrollAnimation'
import FrameColourSwatches from './FrameColourSwatches'
import ProductImageWithLightbox from './ProductImageWithLightbox'
import './MandirPartitions.css'

const products = [
  {
    id: 'economical-mandir',
    title: 'Economical Mandir Partition',
    image: '/mandir-economical.png',
    glass: ['Clear', 'Frosted', 'Tinted'],
    frame: ['Champagne', 'Black', 'Bronze', 'Brush Gold', 'Graphite Grey', 'Rose Gold'],
    extra: 'Anodised aluminium partition door & sliding system with clear toughened glass & minimal frame.',
  },
  {
    id: 'premium-mandir',
    title: 'Premium Mandir Partition',
    image: '/mandir-premium.png',
    glass: ['Fluted', 'Tinted', 'Designer'],
    frame: ['Champagne', 'Black', 'Bronze', 'Graphite Grey', 'Rose Gold', 'Brush Gold'],
    extra: 'Anodised aluminium-framed doors & sliding with different glasses & a hint of bells along with a design created using Georgian bars and various glass patterns.',
  },
  {
    id: 'super-premium-mandir',
    title: 'Super Premium Mandir Partition',
    image: '/mandir-super-premium.png',
    glass: ['Fluted', 'Tinted', 'Designer', '5D glasses'],
    frame: ['Champagne', 'Black', 'Bronze', 'Graphite Grey', 'Rose Gold', 'Brush Gold'],
    extra: 'Anodised Aluminium full-frame sliding & door system with concealed & soft close mechanisms. Multiple glass options can be used with a hint of bells in a single panel. Divider profiles and various glass shapes and types can be incorporated. Different design styles, such as Curved, French grid, and Geometrical patterns, can be created.',
  },
]

type Props = { imageRight?: boolean }

export default function MandirPartitions({ imageRight }: Props) {
  const { ref, inView } = useScrollAnimation<HTMLHeadingElement>()

  return (
    <section id="mandir-partitions" className={`mandir-partitions section section-alt ${imageRight ? 'layout-alt' : ''}`}>
      <h2 className={`section-title mandir-partitions-title ${inView ? 'reveal' : ''}`} ref={ref}>
        Mandir Partitions
      </h2>
      <p className="mandir-partitions-intro">
        Aurex Solutions mandir partition range—partition and sliding systems for sacred spaces, from economical to super premium, with optional bells and varied glass patterns.
      </p>
      <div className="mandir-partitions-grid">
        {products.map((product) => (
          <article key={product.id} className="mandir-partition-card">
            <div className="mandir-partition-image-wrap">
              <ProductImageWithLightbox
                src={product.image}
                alt={product.title}
                imageClassName="mandir-partition-image"
              />
            </div>
            <div className="mandir-partition-body">
              <h3 className="mandir-partition-title">{product.title}</h3>
              <div className="mandir-partition-specs">
                <p>
                  <strong>Glass options:</strong>{' '}
                  <span className="mandir-partition-values">{product.glass.join(', ')}</span>
                </p>
                <p>
                  <strong>Frame colour options:</strong>
                  <FrameColourSwatches colours={product.frame} />
                </p>
                {'extra' in product && product.extra && (
                  <p className="mandir-partition-extra">{product.extra}</p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
