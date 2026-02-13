import { createContext, useContext, useLayoutEffect, useCallback, useMemo, useState } from 'react'

export const DEFAULT_THEME = {
  primary: '#0d282b',
  accent: '#eed7be',
  pageBg: '#FEFDFB',
  textOnDark: '#eed7be',
} as const

export type ThemeColors = {
  primary: string
  accent: string
  pageBg: string
  textOnDark: string
}

const STORAGE_KEY = 'aurex-theme'

function parseHex(hex: string): string {
  const cleaned = hex.replace(/^#/, '').trim()
  if (/^[0-9A-Fa-f]{6}$/.test(cleaned)) return `#${cleaned}`
  if (/^[0-9A-Fa-f]{3}$/.test(cleaned)) {
    const r = cleaned[0] + cleaned[0]
    const g = cleaned[1] + cleaned[1]
    const b = cleaned[2] + cleaned[2]
    return `#${r}${g}${b}`
  }
  return hex
}

function lightenHex(hex: string, amount: number): string {
  const c = hex.replace(/^#/, '')
  const r = Math.min(255, parseInt(c.slice(0, 2), 16) + amount)
  const g = Math.min(255, parseInt(c.slice(2, 4), 16) + amount)
  const b = Math.min(255, parseInt(c.slice(4, 6), 16) + amount)
  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')}`
}

function applyTheme(theme: ThemeColors) {
  const root = document.documentElement
  const primary = parseHex(theme.primary)
  const accent = parseHex(theme.accent)
  const pageBg = parseHex(theme.pageBg)
  const textOnDark = parseHex(theme.textOnDark)

  root.style.setProperty('--bg', primary)
  root.style.setProperty('--bg-alt', lightenHex(primary, 8))
  root.style.setProperty('--bg-page', pageBg)
  root.style.setProperty('--text-primary', textOnDark)
  root.style.setProperty('--text-secondary', lightenHex(textOnDark, 12))
  root.style.setProperty('--button-bg', accent)
  root.style.setProperty('--button-text', primary)
  root.style.setProperty('--accent', accent)
  root.style.setProperty('--border', lightenHex(primary, 15))
  root.style.setProperty('--text-on-light', primary)
  root.style.setProperty('--text-on-light-muted', lightenHex(primary, 20))
  root.style.setProperty('--border-on-light', lightenHex(primary, 35))
}

function loadStoredTheme(): ThemeColors {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULT_THEME }
    const parsed = JSON.parse(raw) as Partial<ThemeColors>
    return {
      primary: parsed.primary ?? DEFAULT_THEME.primary,
      accent: parsed.accent ?? DEFAULT_THEME.accent,
      pageBg: parsed.pageBg ?? DEFAULT_THEME.pageBg,
      textOnDark: parsed.textOnDark ?? DEFAULT_THEME.textOnDark,
    }
  } catch {
    return { ...DEFAULT_THEME }
  }
}

function saveTheme(theme: ThemeColors) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(theme))
  } catch (_) {}
}

type ThemeContextValue = {
  theme: ThemeColors
  setTheme: (next: Partial<ThemeColors>) => void
  setColor: (key: keyof ThemeColors, value: string) => void
  resetTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeColors>(loadStoredTheme)

  useLayoutEffect(() => {
    applyTheme(theme)
    saveTheme(theme)
  }, [theme])

  const setTheme = useCallback((next: Partial<ThemeColors>) => {
    setThemeState((prev) => ({ ...prev, ...next }))
  }, [])

  const setColor = useCallback((key: keyof ThemeColors, value: string) => {
    const hex = parseHex(value)
    setThemeState((prev) => ({ ...prev, [key]: hex }))
  }, [])

  const resetTheme = useCallback(() => {
    setThemeState({ ...DEFAULT_THEME })
  }, [])

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, setColor, resetTheme }),
    [theme, setTheme, setColor, resetTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
