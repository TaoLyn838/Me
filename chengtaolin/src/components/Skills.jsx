import { useLang } from '../hooks/useLang'
import { skills, theme as T } from '../data/content'
import { SectionHead } from './ui'

export function Skills() {
  const { lang } = useLang()
  const groups = [
    [lang === 'en' ? 'Languages' : '语言', skills.languages],
    [lang === 'en' ? 'Frameworks' : '框架', skills.frameworks],
    [lang === 'en' ? 'Tools' : '工具', skills.tools],
  ]
  return (
    <section id="skills" className="section-pad" style={{ padding: '40px 56px' }}>
      <SectionHead
        num={lang === 'en' ? '04 / tools' : '04 / 技术栈'}
        title={lang === 'en' ? 'What I reach for' : '常用工具'}
        lang={lang}
      />
      <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
        {groups.map(([label, items]) => (
          <div
            key={label}
            style={{
              background: T.card,
              border: `1px solid ${T.rule}`,
              borderRadius: 12,
              padding: 18,
            }}
          >
            <div
              style={{
                fontFamily: T.mono,
                fontSize: 10,
                color: T.inkFaint,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              {label}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {items.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: T.mono,
                    fontSize: 12,
                    padding: '5px 10px',
                    background: T.bg,
                    border: `1px solid ${T.rule}`,
                    borderRadius: 6,
                    color: T.ink,
                    letterSpacing: '0.02em',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
