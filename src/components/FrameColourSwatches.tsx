import './FrameColourSwatches.css'

const FRAME_COLOURS: Record<string, string> = {
  Champagne: '#C9B896',
  Black: '#1f1f1f',
  Bronze: '#8B6914',
  'Brush Gold': '#B8860B',
  'Graphite Grey': '#4a4f54',
  'Rose Gold': '#B76E79',
  Rosegold: '#B76E79',
  Gold: '#C5A028',
  SS: '#9ca3af',
}

type Props = { colours: string[]; className?: string }

export default function FrameColourSwatches({ colours, className = '' }: Props) {
  return (
    <div className={`frame-swatches ${className}`.trim()} aria-label="Frame colour options">
      {colours.map((name) => (
        <span
          key={name}
          className="frame-swatch"
          style={{ backgroundColor: FRAME_COLOURS[name] ?? '#6b7280' }}
          title={name}
          aria-hidden
        />
      ))}
      <span className="frame-swatch-labels" aria-live="polite">
        {colours.join(', ')}
      </span>
    </div>
  )
}
