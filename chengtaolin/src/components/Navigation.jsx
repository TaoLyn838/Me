import { useEffect, useState } from 'react'
import { useLang } from '../hooks/useLang'
import { copy, links, theme as T } from '../data/content'

/**
 * The masthead already shows the name in 68px serif, so repeating it in the nav
 * is redundant while the hero is on screen. Show the wordmark only once the
 * masthead name has scrolled out of view.
 */
function useWordmarkVisible() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const target = document.querySelector('.hero-title')
    // No masthead on the page (or no IO support) — fall back to always showing it.
    if (!target || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: '-72px 0px 0px 0px' }
    )
    io.observe(target)
    return () => io.disconnect()
  }, [])

  return visible
}

export function Navigation() {
  const { lang, setLang } = useLang()
  const c = copy[lang]
  const wordmarkVisible = useWordmarkVisible()
  const navItems = [
    ['work', lang === 'en' ? 'Work' : '作品'],
    ['experience', lang === 'en' ? 'Experience' : '经历'],
    ['writing', lang === 'en' ? 'Writing' : '文字'],
    ['contact', lang === 'en' ? 'Contact' : '联系'],
  ]

  return (
    <header
      className="site-nav"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: T.bg,
        borderBottom: `1px solid ${T.rule}`,
      }}
    >
      <div
        className="doc-column site-nav-inner"
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: 16,
          padding: '17px 28px 15px',
          flexWrap: 'wrap',
        }}
      >
        <a
          href="#about"
          className="nav-wordmark"
          aria-hidden={!wordmarkVisible}
          tabIndex={wordmarkVisible ? undefined : -1}
          style={{
            fontFamily: T.serif,
            fontSize: 17.5,
            fontWeight: 600,
            color: T.ink,
            minWidth: 0,
            opacity: wordmarkVisible ? 1 : 0,
            transform: wordmarkVisible ? 'none' : 'translateY(-4px)',
            pointerEvents: wordmarkVisible ? 'auto' : 'none',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        >
          {c.name}
        </a>

        <nav
          className="site-nav-links"
          style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', minWidth: 0 }}
        >
          {navItems.map(([href, label]) => (
            <a
              key={href}
              href={`#${href}`}
              className="nav-link"
              style={{
                fontFamily: T.sans,
                fontSize: 14.5,
                color: T.inkSoft,
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="nav-link"
            style={{
              fontFamily: T.sans,
              fontSize: 14.5,
              padding: 0,
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              color: T.inkSoft,
              whiteSpace: 'nowrap',
            }}
          >
            {c.langToggle}
          </button>
          <a
            href={links.resume[lang]}
            download
            style={{
              fontFamily: T.sans,
              fontSize: 14.5,
              fontWeight: 500,
              color: T.accent,
              whiteSpace: 'nowrap',
            }}
          >
            {lang === 'en' ? 'Résumé ↓' : '简历 ↓'}
          </a>
        </nav>
      </div>
    </header>
  )
}
