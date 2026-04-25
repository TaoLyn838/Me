import { useLang } from '../hooks/useLang'
import { copy, theme as T } from '../data/content'
import { Badge } from './ui'

function Stat({ label, value, delta }) {
  return (
    <div>
      <div
        style={{
          fontFamily: T.mono,
          fontSize: 10,
          color: T.inkFaint,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: T.sans,
          fontSize: 28,
          fontWeight: 600,
          color: T.ink,
          letterSpacing: '-0.02em',
        }}
      >
        {value}
        {delta && (
          <span style={{ fontFamily: T.mono, fontSize: 11, color: T.accent, marginLeft: 6, fontWeight: 500 }}>
            {delta}
          </span>
        )}
      </div>
    </div>
  )
}

export function Hero() {
  const { lang } = useLang()
  const c = copy[lang]
  const featuredStats = c.featured.stats ?? []
  return (
    <section id="about" className="hero-section" style={{ padding: '72px 56px 40px' }}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          fontFamily: T.mono,
          fontSize: 11,
          letterSpacing: '0.08em',
          color: T.inkSoft,
          textTransform: 'uppercase',
          marginBottom: 28,
          padding: '6px 12px',
          borderRadius: 999,
          background: T.card,
          border: `1px solid ${T.rule}`,
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: 999, background: T.accent }} />
        {lang === 'en'
          ? `hello(world) // ${new Date().getFullYear()}`
          : `你好，世界 // ${new Date().getFullYear()}`}
      </div>

      <h1
        className="hero-title"
        style={{
          fontFamily: lang === 'zh' ? T.cjk : T.sans,
          fontSize: 72,
          lineHeight: 1.02,
          letterSpacing: '-0.03em',
          fontWeight: 600,
          margin: 0,
          color: T.ink,
          maxWidth: 900,
        }}
      >
        {lang === 'en' ? (
          <>
            I work between <span style={{ color: T.accent }}>AI research</span><br />
            and <span style={{ color: T.accent }}>engineering</span> — building tools and workflows.
          </>
        ) : (
          <>
            我在 <span style={{ color: T.accent }}>AI 研究</span> 与 <br />
            <span style={{ color: T.accent }}>工程实践</span> 之间工作，搭建工具与 workflow。
          </>
        )}
      </h1>

      <p
        className="hero-bio"
        style={{
          fontFamily: T.sans,
          fontSize: 18,
          lineHeight: 1.55,
          color: T.inkSoft,
          maxWidth: 720,
          marginTop: 28,
        }}
      >
        {c.bioLong}
      </p>

      <div
        className="hero-featured"
        style={{
          marginTop: 40,
          padding: 24,
          borderRadius: 14,
          background: T.card,
          border: `1px solid ${T.rule}`,
          display: 'grid',
          gridTemplateColumns: '180px 1fr auto',
          gap: 28,
          alignItems: 'center',
        }}
      >
        <div>
          <Badge style={{ color: T.accent, background: `${T.accent}18` }}>{c.featured.kicker}</Badge>
          <div style={{ fontFamily: T.mono, fontSize: 11, color: T.inkFaint, marginTop: 10 }}>
            {c.featured.path}
          </div>
        </div>
        <div>
          <div
            style={{
              fontFamily: lang === 'zh' ? T.cjk : T.sans,
              fontSize: 22,
              fontWeight: 600,
              color: T.ink,
              letterSpacing: '-0.015em',
              marginBottom: 4,
            }}
          >
            {c.featured.title}
          </div>
          <div style={{ fontFamily: T.sans, fontSize: 14, color: T.inkSoft, lineHeight: 1.5 }}>
            {c.featured.desc}
          </div>
        </div>
        <div className="hero-featured-stats" style={{ display: 'flex', gap: 18 }}>
          {featuredStats.map((stat) => (
            <Stat key={stat.label} label={stat.label} value={stat.value} delta={stat.delta} />
          ))}
        </div>
      </div>
    </section>
  )
}
