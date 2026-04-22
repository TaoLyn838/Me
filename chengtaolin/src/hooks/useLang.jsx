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

export function useProjectTabs(initial = 'All') {
  const [tab, setTab] = useState(initial)
  const tabs = ['All', 'Swift', 'Web', 'ML']
  const filtered = useMemo(() => {
    if (tab === 'All') return projects
    return projects.filter((p) => p.cat === tab)
  }, [tab])
  const counts = useMemo(() => {
    const c = { All: projects.length }
    for (const cat of ['Swift', 'Web', 'ML']) {
      c[cat] = projects.filter((p) => p.cat === cat).length
    }
    return c
  }, [])
  return { tab, setTab, tabs, counts, filtered }
}
