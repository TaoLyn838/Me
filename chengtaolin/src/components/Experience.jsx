import { useLang } from '../hooks/useLang'
import { experiences, t, theme as T } from '../data/content'
import { SectionHead } from './ui'

export function Experience() {
  const { lang } = useLang()
  return (
    <section id="experience" className="section-pad" style={{ padding: '40px 56px' }}>
      <SectionHead
        num={lang === 'en' ? '03 / experience' : '03 / 经历'}
        title={lang === 'en' ? 'Where I’ve worked' : '履历'}
        lang={lang}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {experiences.map((x) => (
          <div
            key={x.company}
            className="experience-card"
            style={{
              background: T.card,
              border: `1px solid ${T.rule}`,
              borderRadius: 12,
              padding: 20,
              display: 'grid',
              gridTemplateColumns: '200px 1fr 220px',
              gap: 24,
              alignItems: 'start',
            }}
          >
            <div className="experience-meta">
              <div style={{ fontFamily: T.mono, fontSize: 11, color: T.inkFaint, letterSpacing: '0.04em' }}>
                {t(x.date, lang)}
              </div>
              <div style={{ fontFamily: T.mono, fontSize: 10, color: T.inkFaint, marginTop: 4 }}>
                {t(x.location, lang)}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: lang === 'zh' ? T.cjk : T.sans,
                  fontSize: 19,
                  fontWeight: 600,
                  color: T.ink,
                  letterSpacing: '-0.01em',
                }}
              >
                {x.company}
              </div>
              <div
                style={{
                  fontFamily: T.sans,
                  fontSize: 13,
                  color: T.accent,
                  fontWeight: 500,
                  marginTop: 2,
                  marginBottom: 8,
                }}
              >
                {t(x.role, lang)}
              </div>
              <div style={{ fontFamily: T.sans, fontSize: 14, color: T.inkSoft, lineHeight: 1.55 }}>
                {t(x.summary, lang)}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {x.highlights.map((h) => (
                <div key={h} style={{ fontFamily: T.mono, fontSize: 10, color: T.inkSoft, lineHeight: 1.5 }}>
                  <span style={{ color: T.accent }}>›</span> {h}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
