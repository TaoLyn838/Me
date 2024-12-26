import React from 'react'
import Experience from '../components/Experience'
import Education from '../components/Education'
import About from '../components/About'
import Skills from '../components/Skills'

const HomePage = () => {
  return (
    <>
      <div className="page-container">
        <About />
        <Experience />
        <Skills />
        <Education />
      </div>
      <footer className="text-center p-4 mt-10 border-t">
        <p>
          © 2024 Chengtao Lin |{' '}
          <a href="https://github.com/TaoLyn838">GitHub</a>
        </p>
      </footer>
    </>
  )
}

export default HomePage
