import { useLang } from '../hooks/useLang'
import { copy, theme as T } from '../data/content'
import { Badge, SectionHead } from './ui'

export function Writing() {
  const { lang } = useLang()
  const c = copy[lang]
  return (
    <section id="writing" style={{ padding: '40px 56px' }}>
      <SectionHead
        num={lang === 'en' ? '05 / writing' : '05 / 文字'}
        title={lang === 'en' ? 'Notes & essays' : '随笔与文章'}
        lang={lang}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {c.writing.map((w, i) => (
          <a
            key={i}
            href="#"
            style={{
              background: T.card,
              border: `1px solid ${T.rule}`,
              borderRadius: 10,
              padding: '18px 20px',
              display: 'grid',
              gridTemplateColumns: '100px 1fr 120px 80px',
              gap: 20,
              alignItems: 'center',
            }}
          >
            <div style={{ fontFamily: T.mono, fontSize: 11, color: T.inkFaint }}>{w.date}</div>
            <div
              style={{
                fontFamily: lang === 'zh' ? T.cjk : T.sans,
                fontSize: 17,
                color: T.ink,
                fontWeight: 500,
                letterSpacing: '-0.01em',
              }}
            >
              {w.title}
            </div>
            <Badge style={{ background: `${T.accent}18`, color: T.accent, justifySelf: 'start' }}>{w.tag}</Badge>
            <div style={{ fontFamily: T.mono, fontSize: 11, color: T.inkFaint, textAlign: 'right' }}>
              {w.read} →
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
