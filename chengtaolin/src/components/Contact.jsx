import { useLang } from '../hooks/useLang'
import { links, theme as T } from '../data/content'

export function Contact() {
  const { lang } = useLang()

  return (
    <section id="contact" className="contact-section" style={{ padding: '56px 0 56px' }}>
      {/* No headline here — the email address is the whole message. */}
      <div
        style={{
          fontFamily: T.sans,
          fontSize: 12,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: T.inkFaint,
          paddingBottom: 16,
          marginBottom: 24,
          borderBottom: `1px solid ${T.ruleSolid}`,
        }}
      >
        {lang === 'en' ? 'Contact' : '联系'}
      </div>

      <a
        href={`mailto:${links.email}`}
        className="text-link contact-email"
        style={{
          display: 'inline-block',
          maxWidth: '100%',
          fontFamily: T.serif,
          fontSize: 30,
          fontWeight: 600,
          color: T.accent,
          lineHeight: 1.3,
          overflowWrap: 'anywhere',
        }}
      >
        {links.email}
      </a>

      <div className="contact-actions" style={{ display: 'flex', gap: 20, marginTop: 22, flexWrap: 'wrap' }}>
        <a className="text-link" href={links.github} target="_blank" rel="noopener noreferrer" style={{ fontFamily: T.sans, fontSize: 16, fontWeight: 500, color: T.ink }}>
          GitHub ↗
        </a>
        <a className="text-link" href={links.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontFamily: T.sans, fontSize: 16, fontWeight: 500, color: T.ink }}>
          LinkedIn ↗
        </a>
      </div>

      {/* ---- Colophon ---- */}
      <footer
        style={{
          marginTop: 56,
          paddingTop: 20,
          borderTop: `1px solid ${T.rule}`,
        }}
      >
        <div
          className="contact-footer"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 6,
            fontFamily: T.sans,
            fontSize: 13,
            color: T.inkFaint,
          }}
        >
          <span>© {new Date().getFullYear()} Chengtao Lin</span>
          <span>{lang === 'en' ? 'Boston, MA — EST' : '波士顿 · 美东'}</span>
        </div>

        {/* Colophon kicker removed at user request. Restore by un-commenting:
        <div
          className="colophon-kicker"
          style={{
            marginTop: 28,
            textAlign: 'center',
            fontFamily: T.sans,
            fontSize: 12,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: T.inkFaint,
          }}
        >
          {lang === 'en' ? 'Portfolio' : '个人主页'} · {new Date().getFullYear()}
        </div>
        */}
      </footer>
    </section>
  )
}
