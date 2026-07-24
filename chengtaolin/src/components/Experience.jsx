import { useLang } from '../hooks/useLang'
import { experiences, t, theme as T } from '../data/content'
import { SectionHead } from './ui'

export function Experience() {
  const { lang } = useLang()
  return (
    <section id="experience" className="section-pad" style={{ padding: '56px 0' }}>
      <SectionHead
        num={lang === 'en' ? 'Experience' : '经历'}
        title={lang === 'en' ? 'Where I’ve worked' : '工作与实习'}
        lang={lang}
      />
      <div>
        {experiences.map((x) => (
          <div
            key={x.company}
            className="experience-card"
            style={{
              padding: '24px 0',
              borderBottom: `1px solid ${T.rule}`,
              display: 'grid',
              gridTemplateColumns: '150px 1fr',
              gap: 24,
              alignItems: 'start',
            }}
          >
            <div className="experience-meta">
              <div style={{ fontFamily: T.sans, fontSize: 14.5, color: T.inkFaint, lineHeight: 1.5 }}>
                {t(x.date, lang)}
              </div>
              <div style={{ fontFamily: T.sans, fontSize: 14.5, color: T.inkFaint, marginTop: 2, lineHeight: 1.5 }}>
                {t(x.location, lang)}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: T.serif,
                  fontSize: 23,
                  fontWeight: 600,
                  color: T.ink,
                  lineHeight: 1.3,
                }}
              >
                {x.company}
              </div>
              <div
                style={{
                  fontFamily: T.sans,
                  fontSize: 16,
                  color: T.accent,
                  fontWeight: 500,
                  marginTop: 3,
                }}
              >
                {t(x.role, lang)}
              </div>
              <div
                style={{
                  fontFamily: T.sans,
                  fontSize: 16,
                  color: T.inkSoft,
                  lineHeight: 1.7,
                  marginTop: 10,
                }}
              >
                {t(x.summary, lang)}
              </div>
              <div style={{ marginTop: 10 }}>
                {x.highlights.map((h) => (
                  <div
                    key={h}
                    style={{ fontFamily: T.sans, fontSize: 14.5, color: T.inkSoft, lineHeight: 1.7 }}
                  >
                    <span style={{ color: T.accent, marginRight: 6 }}>–</span>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
