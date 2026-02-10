import { useState } from 'react'
import { Palette, X } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import type { ThemeColors } from '../contexts/ThemeContext'
import './ThemeCustomizer.css'

const LABELS: Record<keyof ThemeColors, string> = {
  primary: 'Primary (header, buttons text)',
  accent: 'Accent (highlights, buttons)',
  pageBg: 'Page background',
  textOnDark: 'Text on dark (header/footer)',
}

export default function ThemeCustomizer() {
  const { theme, setColor, resetTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <div className="theme-customizer">
      <button
        type="button"
        className="theme-customizer-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close theme options' : 'Open theme options'}
        aria-expanded={open}
      >
        <Palette size={22} strokeWidth={1.8} />
      </button>

      {open && (
        <div className="theme-customizer-panel" role="dialog" aria-label="Theme colors">
          <div className="theme-customizer-header">
            <h3 className="theme-customizer-title">Theme colors</h3>
            <button
              type="button"
              className="theme-customizer-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          <p className="theme-customizer-hint">
            Pick a color or enter a hex code to see the theme update.
          </p>

          <div className="theme-customizer-fields">
            {(Object.keys(LABELS) as (keyof ThemeColors)[]).map((key) => (
              <div key={key} className="theme-customizer-field">
                <label className="theme-customizer-label">
                  <span className="theme-customizer-label-text">{LABELS[key]}</span>
                  <div className="theme-customizer-inputs">
                    <input
                      type="color"
                      value={theme[key]}
                      onChange={(e) => setColor(key, e.target.value)}
                      className="theme-customizer-swatch"
                      aria-label={`${LABELS[key]} color picker`}
                    />
                    <input
                      type="text"
                      value={theme[key]}
                      onChange={(e) => setColor(key, e.target.value)}
                      className="theme-customizer-hex"
                      placeholder="#000000"
                      aria-label={`${LABELS[key]} hex code`}
                    />
                  </div>
                </label>
              </div>
            ))}
          </div>

          <button type="button" className="theme-customizer-reset btn-primary" onClick={resetTheme}>
            Reset to default
          </button>
        </div>
      )}
    </div>
  )
}
