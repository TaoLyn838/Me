import { useLang } from '../hooks/useLang'
import { links, theme as T } from '../data/content'

export function Contact() {
  const { lang } = useLang()
  return (
    <section id="contact" style={{ padding: '40px 56px 72px' }}>
      <div
        style={{
          background: T.ink,
          color: T.bg,
          borderRadius: 20,
          padding: '48px 40px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(${T.accentSoft}22 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            opacity: 0.35,
          }}
        />
        <div style={{ position: 'relative' }}>
          <div
            style={{
              fontFamily: T.mono,
              fontSize: 11,
              color: T.accentSoft,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            {lang === 'en' ? '// 06 / contact' : '// 06 / 联系'}
          </div>
          <h2
            style={{
              fontFamily: lang === 'zh' ? T.cjk : T.sans,
              fontSize: 52,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              fontWeight: 600,
              margin: 0,
              maxWidth: 720,
            }}
          >
            {lang === 'en' ? 'Say hi — I reply within a day.' : '来打个招呼 —— 我通常一天内回复。'}
          </h2>
          <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap' }}>
            <a
              href={`mailto:${links.email}`}
              style={{
                fontFamily: T.sans,
                fontSize: 14,
                fontWeight: 500,
                padding: '12px 18px',
                borderRadius: 10,
                background: T.accentSoft,
                color: T.ink,
              }}
            >
              {links.email} →
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: T.sans,
                fontSize: 14,
                fontWeight: 500,
                padding: '12px 18px',
                borderRadius: 10,
                border: `1px solid ${T.accentSoft}44`,
                color: T.bg,
              }}
            >
              GitHub ↗
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: T.sans,
                fontSize: 14,
                fontWeight: 500,
                padding: '12px 18px',
                borderRadius: 10,
                border: `1px solid ${T.accentSoft}44`,
                color: T.bg,
              }}
            >
              LinkedIn ↗
            </a>
            <a
              href={links.resume[lang]}
              download
              style={{
                fontFamily: T.sans,
                fontSize: 14,
                fontWeight: 500,
                padding: '12px 18px',
                borderRadius: 10,
                border: `1px solid ${T.accentSoft}44`,
                color: T.bg,
              }}
            >
              {lang === 'en' ? 'CV ↓' : '简历 ↓'}
            </a>
          </div>
          <div
            style={{
              marginTop: 40,
              paddingTop: 20,
              borderTop: `1px solid ${T.accentSoft}22`,
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: T.mono,
              fontSize: 11,
              color: T.accentSoft,
              letterSpacing: '0.05em',
            }}
          >
            <span>© {new Date().getFullYear()} Chengtao Lin</span>
            <span>{lang === 'en' ? 'Boston, MA — EST' : '波士顿 · 美东'}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
