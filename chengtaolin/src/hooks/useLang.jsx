import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { projects } from '../data/content'

const LangCtx = createContext({ lang: 'en', setLang: () => {} })

export function LangProvider({ children, storageKey = 'dir-lang' }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem(storageKey) || 'en'
    } catch {
      return 'en'
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, lang)
    } catch {
      // ignore
    }
  }, [lang, storageKey])
  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>
}

export function useLang() {
  return useContext(LangCtx)
}

export function useProjectTabs(initial = 'Recent') {
  const [tab, setTab] = useState(initial)
  const recentProjects = useMemo(() => {
    return [...projects]
      .map((project, index) => ({ ...project, _index: index }))
      .sort((a, b) => {
        if (b.year !== a.year) return b.year - a.year
        return a._index - b._index
      })
      .slice(0, 4)
      .map(({ _index, ...project }) => project)
  }, [])
  const tabs = ['All', 'Recent', 'Swift', 'Web', 'ML']
  const filtered = useMemo(() => {
    if (tab === 'All') return projects
    if (tab === 'Recent') return recentProjects
    return projects.filter((p) => p.cat === tab)
  }, [recentProjects, tab])
  const counts = useMemo(() => {
    const c = { All: projects.length, Recent: recentProjects.length }
    for (const cat of ['Swift', 'Web', 'ML']) {
      c[cat] = projects.filter((p) => p.cat === cat).length
    }
    return c
  }, [recentProjects])
  return { tab, setTab, tabs, counts, filtered }
}
