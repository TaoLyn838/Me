import { theme as T } from '../data/content'

export function Badge({ children, style }) {
  return (
    <span
      style={{
        fontFamily: T.mono,
        fontSize: 10,
        letterSpacing: '0.08em',
        padding: '3px 8px',
        borderRadius: 4,
        background: 'rgba(25,21,16,0.05)',
        color: T.inkSoft,
        textTransform: 'uppercase',
        ...style,
      }}
    >
      {children}
    </span>
  )
}

export function SectionHead({ num, title, subtitle, lang, right }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 24,
        paddingBottom: 18,
        borderBottom: `1px solid ${T.ruleSolid}`,
        gap: 24,
        flexWrap: 'wrap',
      }}
    >
      <div>
        <div
          style={{
            fontFamily: T.mono,
            fontSize: 11,
            color: T.accent,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: 8,
          }}
        >
          § {num}
        </div>
        <h2
          style={{
            fontFamily: lang === 'zh' ? T.cjk : T.sans,
            fontSize: 40,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            fontWeight: 600,
            margin: 0,
            color: T.ink,
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <div
            style={{
              fontFamily: T.sans,
              fontSize: 14,
              color: T.inkSoft,
              marginTop: 8,
              maxWidth: 600,
            }}
          >
            {subtitle}
          </div>
        )}
      </div>
      {right}
    </div>
  )
}
