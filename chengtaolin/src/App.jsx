import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import ProjectsPage from './pages/Projects'
import BlogsPage from './pages/Blogs'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'

function App() {
  const [navBarVisible, setNavBarVisible] = useState(true)
  const [lastScrollTop, setLastScrollTop] = useState(0)

  const controlNavBar = () => {
    const isAtBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight

    if (window.scrollY === 0) {
      setNavBarVisible(true)
      setLastScrollTop(window.scrollY)
      return
    }

    if (window.scrollY > lastScrollTop || isAtBottom) {
      setNavBarVisible(false)
    } else {
      setNavBarVisible(true)
    }

    setLastScrollTop(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavBar)
    return () => window.removeEventListener('scroll', controlNavBar)
  }, [lastScrollTop])

  return (
    <Router>
      <Navbar visible={navBarVisible} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
      </Routes>
    </Router>
  )
}

export default App
