import { useState, useEffect } from 'react'
import './Preloader.css'

const EXIT_DURATION_MS = 500

export default function Preloader({
  visible,
  onExitComplete,
}: {
  visible: boolean
  onExitComplete: () => void
}) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (!visible && !exiting) {
      setExiting(true)
      const t = setTimeout(onExitComplete, EXIT_DURATION_MS)
      return () => clearTimeout(t)
    }
  }, [visible, exiting, onExitComplete])

  return (
    <div
      className={`preloader ${exiting ? 'preloader--exiting' : ''}`}
      role="status"
      aria-label="Loading"
    >
      <div className="preloader-inner">
        <div className="preloader-gate-wrap">
          <svg
            className="preloader-gate"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M12 8v48M52 8v48M12 8h40M12 20h40M12 32h40M12 44h40" />
            <path d="M28 8v48M36 8v48" />
          </svg>
        </div>
        <h1 className="preloader-title">
          <span className="preloader-word">Aurex Solutions</span>
        </h1>
        <div className="preloader-line" aria-hidden />
      </div>
    </div>
  )
}
