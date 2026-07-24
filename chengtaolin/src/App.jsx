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
        className="app-shell"
        style={{
          background: T.bg,
          color: T.ink,
          minHeight: '100%',
          width: '100%',
          fontFamily: T.sans,
        }}
      >
        {/* Full-bleed sticky bar so the background covers the page gutters */}
        <Navigation />

        <div className="doc-column">
          <main>
            <Reveal><Hero /></Reveal>
            <Reveal><Projects /></Reveal>
            <Reveal><Experience /></Reveal>
            <Reveal><Skills /></Reveal>
            <Reveal><Writing /></Reveal>
            <Reveal><Contact /></Reveal>
          </main>
        </div>
      </div>
    </LangProvider>
  )
}

export default App
