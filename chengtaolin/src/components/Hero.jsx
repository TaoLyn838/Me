import { useLang } from '../hooks/useLang'
import { copy, theme as T } from '../data/content'

export function Hero() {
  const { lang } = useLang()
  const c = copy[lang]
  const stats = (c.featured.stats ?? []).map((s) => `${s.value} ${s.label}`).join(' · ')

  return (
    <section id="about" className="hero-section" style={{ padding: '84px 0 56px' }}>
      {/* ---- Masthead (centered, mockup B) ---- */}
      <div className="masthead" style={{ textAlign: 'center' }}>
        <h1
          className="hero-title"
          style={{
            fontFamily: T.serif,
            fontSize: 68,
            lineHeight: 1.06,
            fontWeight: 500,
            letterSpacing: '-0.015em',
            margin: 0,
            color: T.ink,
            overflowWrap: 'break-word',
          }}
        >
          {c.name}
        </h1>

        <div
          className="masthead-role"
          style={{
            fontFamily: T.serif,
            fontSize: 22,
            fontStyle: 'italic',
            fontWeight: 400,
            lineHeight: 1.4,
            color: T.accent,
            marginTop: 14,
          }}
        >
          {c.mastheadRole}
        </div>

        <div className="masthead-rule" style={{ height: 1, background: T.rule, margin: '26px auto 0', maxWidth: 480 }} />

        <p
          className="hero-bio"
          style={{
            fontFamily: T.sans,
            fontSize: 16.5,
            lineHeight: 1.7,
            color: T.inkSoft,
            margin: '20px auto 0',
            maxWidth: 520,
          }}
        >
          {c.bio}
        </p>

        <div className="masthead-rule" style={{ height: 1, background: T.rule, margin: '26px auto 0', maxWidth: 480 }} />

        <div
          className="masthead-meta"
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px 18px',
            marginTop: 20,
            fontFamily: T.sans,
            fontSize: 12,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: T.inkFaint,
          }}
        >
          {(c.mastheadMeta ?? []).map((item, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 18 }}>
              {i > 0 && (
                <span aria-hidden="true" style={{ opacity: 0.5 }}>
                  ·
                </span>
              )}
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ---- Body (left-aligned for readability) ---- */}
      <p
        className="hero-longbio"
        style={{
          fontFamily: T.sans,
          fontSize: 17,
          lineHeight: 1.8,
          color: T.inkSoft,
          margin: '40px 0 0',
        }}
      >
        {c.bioLong}
      </p>

      <p
        style={{
          fontFamily: T.sans,
          fontSize: 16,
          lineHeight: 1.75,
          color: T.inkSoft,
          margin: '16px 0 0',
        }}
      >
        <span style={{ color: T.ink, fontWeight: 500 }}>
          {lang === 'en' ? 'Currently. ' : '现状。'}
        </span>
        {c.nowLine.replace(/^(Currently:|Currently|现状：|现状:)\s*/, '')}
      </p>

      <div
        className="hero-featured"
        style={{
          marginTop: 36,
          paddingTop: 20,
          borderTop: `1px solid ${T.rule}`,
        }}
      >
        <div
          style={{
            fontFamily: T.sans,
            fontSize: 12,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: T.inkFaint,
            marginBottom: 10,
          }}
        >
          {c.featured.kicker}
        </div>
        <div
          style={{
            fontFamily: T.serif,
            fontSize: 23,
            fontWeight: 600,
            color: T.ink,
            lineHeight: 1.35,
          }}
        >
          {c.featured.title}
        </div>
        <div
          style={{
            fontFamily: T.sans,
            fontSize: 16,
            color: T.inkSoft,
            lineHeight: 1.7,
            marginTop: 6,
          }}
        >
          {c.featured.desc}
        </div>
        {stats && (
          <div style={{ fontFamily: T.sans, fontSize: 14.5, color: T.inkFaint, marginTop: 10 }}>{stats}</div>
        )}
      </div>

      {/* Single CTA. Résumé lives only in the nav; email lives only in Contact. */}
      <div className="hero-links" style={{ display: 'flex', gap: 20, marginTop: 32, flexWrap: 'wrap' }}>
        <a className="text-link" href="#work" style={{ fontFamily: T.sans, fontSize: 16, fontWeight: 500, color: T.accent }}>
          {c.ctaWork} ↓
        </a>
      </div>
    </section>
  )
}
