import { useLang } from '../hooks/useLang'
import { copy, theme as T } from '../data/content'
import { SectionHead } from './ui'

export function Writing() {
  const { lang } = useLang()
  const c = copy[lang]
  return (
    <section id="writing" className="section-pad" style={{ padding: '56px 0' }}>
      <SectionHead
        num={lang === 'en' ? 'Writing' : '文字'}
        title={lang === 'en' ? 'Research & project notes' : '研究与项目记录'}
        lang={lang}
      />
      <div>
        {c.writing.map((w, i) => (
          <a
            key={i}
            href={w.href}
            target="_blank"
            rel="noopener noreferrer"
            className="writing-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '90px 1fr auto',
              gap: 20,
              alignItems: 'baseline',
              padding: '18px 0',
              borderBottom: `1px solid ${T.rule}`,
            }}
          >
            <div style={{ fontFamily: T.sans, fontSize: 14.5, color: T.inkFaint }}>{w.date}</div>
            <div>
              <span
                style={{
                  fontFamily: T.serif,
                  fontSize: 20,
                  color: T.ink,
                  fontWeight: 600,
                  lineHeight: 1.4,
                }}
              >
                {w.title}
              </span>
              <span style={{ fontFamily: T.sans, fontSize: 14.5, color: T.inkFaint, marginLeft: 12 }}>{w.tag}</span>
            </div>
            <span
              className="writing-link"
              style={{
                fontFamily: T.sans,
                fontSize: 14.5,
                fontWeight: 500,
                color: T.accent,
                whiteSpace: 'nowrap',
              }}
            >
              {w.read} →
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
