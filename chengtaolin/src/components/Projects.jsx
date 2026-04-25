import { useLang, useProjectTabs } from '../hooks/useLang'
import { t, theme as T } from '../data/content'
import { Badge, SectionHead } from './ui'

const CAT_ACCENT = {
  Swift: { bg: '#f2d4b8', fg: '#8a4a1b' },
  Web: { bg: '#d0dcc5', fg: '#3f5527' },
  ML: { bg: '#e0d2ea', fg: '#53397a' },
}

export function Projects() {
  const { lang } = useLang()
  const { tab, setTab, tabs, counts, filtered } = useProjectTabs()
  return (
    <section id="work" className="section-pad" style={{ padding: '40px 56px' }}>
      <SectionHead
        num={lang === 'en' ? '02 / work' : '02 / 作品'}
        title={lang === 'en' ? 'Projects' : '项目'}
        subtitle={
          lang === 'en'
            ? 'Research systems, backend tooling, and shipped apps. Filter by stack.'
            : '包含研究系统、后端工具与已完成应用，可按技术栈筛选。'
        }
        lang={lang}
        right={
          <div
            className="tabs-pill"
            style={{
              display: 'flex',
              gap: 4,
              padding: 4,
              background: T.card,
              borderRadius: 999,
              border: `1px solid ${T.rule}`,
            }}
          >
            {tabs.map((cat) => (
              <button
                key={cat}
                onClick={() => setTab(cat)}
                style={{
                  padding: '7px 14px',
                  borderRadius: 999,
                  cursor: 'pointer',
                  border: 'none',
                  background: tab === cat ? T.ink : 'transparent',
                  color: tab === cat ? T.bg : T.ink,
                  fontFamily: T.mono,
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {cat === 'All'
                  ? (lang === 'en' ? 'All' : '全部')
                  : cat === 'Recent'
                    ? (lang === 'en' ? 'Recents' : '最近')
                    : cat}
                <span style={{ opacity: 0.5, marginLeft: 5 }}>{counts[cat]}</span>
              </button>
            ))}
          </div>
        }
      />

      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {filtered.map((p, i) => {
          const accent = CAT_ACCENT[p.cat]
          return (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={{
                background: T.card,
                border: `1px solid ${T.rule}`,
                borderRadius: 12,
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                gridColumn: p.featured ? 'span 2' : 'span 1',
                minHeight: p.featured ? 180 : 140,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  <Badge style={{ background: accent.bg, color: accent.fg }}>{p.cat}</Badge>
                  {p.featured && (
                    <Badge style={{ background: `${T.accent}18`, color: T.accent }}>
                      ★ {lang === 'en' ? 'featured' : '精选'}
                    </Badge>
                  )}
                </div>
                <div style={{ fontFamily: T.mono, fontSize: 10, color: T.inkFaint }}>
                  {String(i + 1).padStart(2, '0')} / {p.year}
                </div>
              </div>

              <div
                className="project-title"
                style={{
                  fontFamily: lang === 'zh' ? T.cjk : T.sans,
                  fontSize: p.featured ? 26 : 20,
                  fontWeight: 600,
                  color: T.ink,
                  letterSpacing: '-0.015em',
                  marginTop: 'auto',
                }}
              >
                {p.title}
              </div>

              <div style={{ fontFamily: T.sans, fontSize: 13, color: T.inkSoft, lineHeight: 1.5 }}>
                {t(p.desc, lang)}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 4 }}>
                {p.tech.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: T.mono,
                      fontSize: 10,
                      color: T.inkSoft,
                      letterSpacing: '0.04em',
                      padding: '3px 8px',
                      background: 'rgba(25,21,16,0.04)',
                      borderRadius: 4,
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {p.tech.length > 5 && (
                  <span style={{ fontFamily: T.mono, fontSize: 10, color: T.inkFaint, padding: '3px 4px' }}>
                    +{p.tech.length - 5}
                  </span>
                )}
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
