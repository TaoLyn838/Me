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
    <section id="skills" className="section-pad" style={{ padding: '56px 0' }}>
      <SectionHead
        num={lang === 'en' ? 'Tools' : '技术栈'}
        title={lang === 'en' ? 'What I reach for' : '常用工具'}
        lang={lang}
      />
      <div>
        {groups.map(([label, items]) => (
          <div
            key={label}
            className="skills-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '150px 1fr',
              gap: 24,
              padding: '16px 0',
              borderBottom: `1px solid ${T.rule}`,
              alignItems: 'baseline',
            }}
          >
            <div
              style={{
                fontFamily: T.sans,
                fontSize: 12,
                color: T.inkFaint,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              {label}
            </div>
            <div style={{ fontFamily: T.sans, fontSize: 17, color: T.ink, lineHeight: 1.8 }}>
              {items.join(' · ')}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
