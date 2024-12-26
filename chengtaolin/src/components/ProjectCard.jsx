import React from 'react'
import icons from '../data/icons'

const ProjectCard = ({ title, date, description, technologies, link }) => {
  return (
    <>
      <div className="flex justify-between">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="underline text-gray-600 hover:text-gray-800"
        >
          <span className="text-lg font-semibold">{title}</span>
        </a>
        <span className="text-xs text-gray-800 font-semibold">{date}</span>
      </div>
      <p className="text-sm text-gray-500 font-sans">{description}</p>
      <ul className="flex flex-wrap gap-1 mt-2">
        {technologies.map((tech, index) => (
          <li
            key={index}
            className=" relative group me-1 inline-flex items-center text-sm text-gray-800"
          >
            <img
              src={icons[tech.toLowerCase()]}
              className="shrink-0 size-4 me-1 rounded-sm"
              alt={tech}
            />
            <span className="absolute left-0 top-full mb-2 hidden group-hover:block bg-orange-100 text-black text-xs rounded py-1 px-2 whitespace-nowrap">
              {tech}{' '}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ProjectCard
