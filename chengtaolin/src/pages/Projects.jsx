import { projects as initialProjects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import { sortByMMYYYDate } from '../utils/sortUtils.js'
import { useState, useMemo } from 'react'

const ProjectsPage = () => {
  const [projects, setProjects] = useState(initialProjects)
  const [isAscending, setIsAscending] = useState(true)
  const [selectedTech, setSelectedTech] = useState('All')

  const getTechCount = () => {
    const techCount = {}
    initialProjects.forEach((project) => {
      project.technologies.forEach((tech) => {
        techCount[tech] = (techCount[tech] || 0) + 1
      })
    })
    return techCount
  }

  useMemo(() => {
    setProjects(sortByMMYYYDate(projects, false))
  }, [])

  const handleSortByDate = () => {
    const sortedProjects = sortByMMYYYDate(projects, isAscending)
    setProjects(sortedProjects)
    setIsAscending(!isAscending)
  }

  const handleFilterByTech = (tech) => {
    setSelectedTech(tech)
    if (tech === 'All') {
      setProjects(initialProjects)
    } else {
      const filteredProjects = initialProjects.filter((project) =>
        project.technologies.includes(tech)
      )
      setProjects(filteredProjects)
    }
  }

  return (
    <div className="page-container">
      <div className="flex items-center space-x-4 mb-4">
        <button
          onClick={handleSortByDate}
          className="text-gray-700 text-sm mb-3 font-medium border-2 border-gray-200 rounded-lg px-2 py-1"
        >
          Date {isAscending ? '▼' : '▲'}
        </button>
        <select
          value={selectedTech}
          onChange={(e) => handleFilterByTech(e.target.value)}
          className="text-gray-700 text-sm mb-3 font-medium border-2 border-gray-200 rounded-lg px-2 py-1"
        >
          <option value="All">All ({initialProjects.length})</option>
          {Object.entries(getTechCount()).map(([tech, count], index) => (
            <option key={index} value={tech}>
              {tech} ({count})
            </option>
          ))}
        </select>
      </div>

      <ul className="bg-white rounded-lg shadow divide-y divide-gray-200">
        {projects.map((project, index) => (
          <li className="px-6 py-4" key={index}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectsPage
