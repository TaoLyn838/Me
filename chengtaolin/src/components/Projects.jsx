import { useLang, useProjectTabs } from '../hooks/useLang'
import { t, theme as T } from '../data/content'
import { SectionHead } from './ui'

export function Projects() {
  const { lang } = useLang()
  const { tab, setTab, tabs, counts, filtered } = useProjectTabs()
  return (
    <section id="work" className="section-pad" style={{ padding: '56px 0' }}>
      <SectionHead
        num={lang === 'en' ? 'Work' : '作品'}
        title={lang === 'en' ? 'Selected projects' : '精选项目'}
        subtitle={
          lang === 'en'
            ? 'Research systems, backend tooling, and shipped apps.'
            : '包含研究系统、后端工具与已完成应用。'
        }
        lang={lang}
        right={
          <div className="tabs-pill" style={{ display: 'flex', gap: 16 }}>
            {tabs.map((cat) => (
              <button
                key={cat}
                onClick={() => setTab(cat)}
                className="tab-link"
                style={{
                  padding: '2px 0',
                  cursor: 'pointer',
                  border: 'none',
                  background: 'none',
                  fontFamily: T.sans,
                  fontSize: 14.5,
                  color: tab === cat ? T.accent : T.inkFaint,
                  fontWeight: tab === cat ? 500 : 400,
                  borderBottom: `1px solid ${tab === cat ? T.accent : 'transparent'}`,
                }}
              >
                {cat === 'All'
                  ? (lang === 'en' ? 'All' : '全部')
                  : cat === 'Recent'
                    ? (lang === 'en' ? 'Recent' : '最近')
                    : cat}
                <span style={{ opacity: 0.55, marginLeft: 4 }}>{counts[cat]}</span>
              </button>
            ))}
          </div>
        }
      />

      <div>
        {filtered.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row"
            style={{
              display: 'block',
              padding: '22px 0',
              borderBottom: `1px solid ${T.rule}`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
              <div
                className="project-title"
                style={{
                  fontFamily: T.serif,
                  fontSize: 23,
                  fontWeight: 600,
                  color: T.ink,
                  lineHeight: 1.3,
                  minWidth: 0,
                  flex: '1 1 auto',
                }}
              >
                {p.title}
                {p.featured && (
                  <span style={{ fontFamily: T.sans, fontSize: 13, color: T.accent, marginLeft: 10, fontWeight: 500 }}>
                    {lang === 'en' ? '★ featured' : '★ 精选'}
                  </span>
                )}
              </div>
              <div
                className="project-meta"
                style={{
                  fontFamily: T.sans,
                  fontSize: 13,
                  color: T.inkFaint,
                  flexShrink: 0,
                  textAlign: 'right',
                  whiteSpace: 'nowrap',
                }}
              >
                {p.cat} · {p.year}
              </div>
            </div>

            <div
              style={{
                fontFamily: T.sans,
                fontSize: 16,
                color: T.inkSoft,
                lineHeight: 1.65,
                marginTop: 8,
              }}
            >
              {t(p.desc, lang)}
            </div>

            <div style={{ fontFamily: T.sans, fontSize: 14.5, color: T.inkFaint, marginTop: 8 }}>
              {p.tech.join(' · ')}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
