import { theme as T } from '../data/content'

export function Badge({ children, style }) {
  return (
    <span
      style={{
        fontFamily: T.sans,
        fontSize: 12,
        letterSpacing: '0.06em',
        padding: '2px 8px',
        borderRadius: 999,
        border: `1px solid ${T.ruleSolid}`,
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
      className="section-head"
      style={{
        marginBottom: 28,
        paddingBottom: 16,
        borderBottom: `1px solid ${T.ruleSolid}`,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: 20,
          flexWrap: 'wrap',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: T.sans,
              fontSize: 12,
              color: T.inkFaint,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 6,
            }}
          >
            {num}
          </div>
          <h2
            style={{
              fontFamily: T.serif,
              fontSize: 34,
              lineHeight: 1.15,
              fontWeight: 600,
              margin: 0,
              color: T.ink,
            }}
          >
            {title}
          </h2>
        </div>
        {right}
      </div>
      {subtitle && (
        <div
          className="section-subtitle"
          style={{
            fontFamily: T.sans,
            fontSize: 16,
            color: T.inkSoft,
            marginTop: 10,
            maxWidth: 640,
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </div>
      )}
    </div>
  )
}
