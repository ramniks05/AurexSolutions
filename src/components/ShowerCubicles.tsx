import { useScrollAnimation } from '../hooks/useScrollAnimation'
import FrameColourSwatches from './FrameColourSwatches'
import ProductImageWithLightbox from './ProductImageWithLightbox'
import './ShowerCubicles.css'

const tiers = [
  {
    id: 'economical',
    title: 'Economical Shower Cubicle',
    image: '/shower-economical.png',
    glass: ['Clear', 'Frosted'],
    frame: ['Black', 'SS', 'Gold'],
    addons: 'Nano coating Glass Add-ons',
    extra: [
      "Patch fitting with frameless Door. Comes with Visible 'L' connector, glass-to-glass Hinge & top rod with 10mm Clear toughened glass.",
    ],
  },
  {
    id: 'premium',
    title: 'Premium Shower Cubicle',
    image: '/shower-premium.png',
    glass: ['Fluted', 'Tinted', 'Designer'],
    frame: ['Champagne', 'Brush Gold', 'Black', 'Bronze', 'Grey'],
    addons: 'Nano coating Glass Add-ons',
    extra: [
      'Anodised Aluminium outer frames with frameless doors, visible Hinges, Different type of glass can be used.',
    ],
  },
  {
    id: 'super-premium',
    title: 'Super Premium Shower Cubicle',
    image: '/shower-super-premium.png',
    glass: ['Fluted', 'Fabric', 'Designer'],
    frame: ['Champagne', 'Brush Gold', 'Black', 'Bronze', 'Grey'],
    addons: 'Nano coating Glass Add-ons',
    extra: [
      'Anodised Aluminium outer frames with fully framed door & concealed hinges, multiple glass can be used in single panel. Fluted glass, Fabric glass, designer glass. Different kind of design can be done curved , french, any geometrical patterns',
    ],
  },
]

type Props = { imageRight?: boolean }

export default function ShowerCubicles({ imageRight }: Props) {
  const { ref, inView } = useScrollAnimation<HTMLHeadingElement>()

  return (
    <section id="shower-cubicles" className={`shower-cubicles section section-alt ${imageRight ? 'layout-alt' : ''}`}>
      <h2 className={`section-title shower-cubicles-title ${inView ? 'reveal' : ''}`} ref={ref}>
        Shower Cubicles
      </h2>
      <p className="shower-cubicles-intro">
        Aurex Solutions shower cubicle range from economical to super premium—each with glass and frame options to match your space.
      </p>
      <div className="shower-cubicles-grid">
        {tiers.map((tier) => (
          <article key={tier.id} className="shower-cubicle-card">
            <div className="shower-cubicle-image-wrap">
              <ProductImageWithLightbox
                src={tier.image}
                alt={tier.title}
                imageClassName="shower-cubicle-image"
              />
            </div>
            <div className="shower-cubicle-body">
              <h3 className="shower-cubicle-title">{tier.title}</h3>
              <div className="shower-cubicle-specs">
                <p>
                  <strong>Glass options:</strong>{' '}
                  <span className="shower-cubicle-values">{tier.glass.join(', ')}</span>
                </p>
                <p>
                  <strong>Frame colour options:</strong>
                  <FrameColourSwatches colours={tier.frame} />
                </p>
                <p className="shower-cubicle-addons">*{tier.addons}*</p>
              </div>
              {tier.extra && (
                <ul className="shower-cubicle-extra">
                  {tier.extra.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
