import { useLang } from '../hooks/useLang'
import { copy, links, profileImg, theme as T } from '../data/content'

export function Navigation() {
  const { lang, setLang } = useLang()
  const c = copy[lang]
  const navItems = [
    ['about', '01', lang === 'en' ? 'About' : '关于'],
    ['work', '02', lang === 'en' ? 'Work' : '作品'],
    ['experience', '03', lang === 'en' ? 'Experience' : '经历'],
    ['skills', '04', lang === 'en' ? 'Tools' : '技术栈'],
    ['writing', '05', lang === 'en' ? 'Writing' : '文字'],
    ['contact', '06', lang === 'en' ? 'Contact' : '联系'],
  ]
  return (
    <aside
      style={{
        position: 'sticky',
        top: 0,
        alignSelf: 'start',
        width: 320,
        height: '100vh',
        padding: '36px 28px',
        borderRight: `1px solid ${T.rule}`,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
      }}
    >
      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 10,
            overflow: 'hidden',
            flexShrink: 0,
            border: `1px solid ${T.rule}`,
          }}
        >
          <img src={profileImg} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <div
            style={{
              fontFamily: lang === 'zh' ? T.cjk : T.sans,
              fontSize: 17,
              fontWeight: 600,
              color: T.ink,
              letterSpacing: '-0.01em',
            }}
          >
            {c.name}
          </div>
          <div style={{ fontFamily: T.mono, fontSize: 11, color: T.inkSoft, marginTop: 2 }}>{c.roleShort}</div>
        </div>
      </div>

      <div
        style={{
          padding: 14,
          borderRadius: 10,
          background: T.card,
          border: `1px solid ${T.rule}`,
          fontFamily: T.mono,
          fontSize: 11,
          color: T.inkSoft,
          lineHeight: 1.6,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: T.dot,
              boxShadow: `0 0 0 3px ${T.dot}22`,
            }}
          />
          <span style={{ color: T.ink, fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            {lang === 'en' ? 'Open to AI tooling / game AI roles' : '求职中 · AI 工具 / 游戏 AI'}
          </span>
        </div>
        <div style={{ color: T.inkSoft, lineHeight: 1.55, fontFamily: T.sans, fontSize: 13 }}>{c.nowLine}</div>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {navItems.map(([href, num, label]) => (
          <a
            key={href}
            href={`#${href}`}
            className="sidebar-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              padding: '8px 10px',
              borderRadius: 6,
              fontFamily: T.sans,
              fontSize: 14,
              color: T.ink,
            }}
          >
            <span style={{ fontFamily: T.mono, fontSize: 10, color: T.inkFaint, width: 18 }}>{num}</span>
            <span>{label}</span>
          </a>
        ))}
      </nav>

      <div style={{ flex: 1 }} />

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
          style={{
            flex: 1,
            fontFamily: T.mono,
            fontSize: 11,
            padding: '10px 0',
            cursor: 'pointer',
            background: 'transparent',
            color: T.ink,
            border: `1px solid ${T.ruleSolid}`,
            borderRadius: 7,
            letterSpacing: '0.08em',
          }}
        >
          EN / 中文
          <span style={{ marginLeft: 4, color: T.accent, fontWeight: 600 }}>↔</span>
        </button>
        <a
          href={links.resume[lang]}
          download
          style={{
            flex: 1,
            fontFamily: T.mono,
            fontSize: 11,
            padding: '10px 0',
            textAlign: 'center',
            background: T.ink,
            color: T.bg,
            borderRadius: 7,
            letterSpacing: '0.08em',
          }}
        >
          {lang === 'en' ? 'CV ↓' : '简历 ↓'}
        </a>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 12,
          fontFamily: T.mono,
          fontSize: 11,
          color: T.inkFaint,
          letterSpacing: '0.04em',
        }}
      >
        <a href={links.github} target="_blank" rel="noopener noreferrer">
          github
        </a>
        <span>·</span>
        <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
          linkedin
        </a>
        <span>·</span>
        <a href={`mailto:${links.email}`}>email</a>
      </div>
    </aside>
  )
}
