import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Writing } from './components/Writing'
import { Contact } from './components/Contact'
import { Reveal } from './components/Reveal'
import { LangProvider } from './hooks/useLang'
import { theme as T } from './data/content'

function App() {
  return (
    <LangProvider storageKey="dir3-lang">
      <div
        style={{
          background: T.bg,
          color: T.ink,
          minHeight: '100%',
          fontFamily: T.sans,
          display: 'grid',
          gridTemplateColumns: '320px 1fr',
        }}
      >
        <Navigation />
        <main style={{ minWidth: 0 }}>
          <Reveal><Hero /></Reveal>
          <Reveal><Projects /></Reveal>
          <Reveal><Experience /></Reveal>
          <Reveal><Skills /></Reveal>
          <Reveal><Writing /></Reveal>
          <Reveal><Contact /></Reveal>
        </main>
      </div>
    </LangProvider>
  )
}

export default App
