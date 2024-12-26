import React from 'react'
import { skills } from '../data/resume'
import icons from '../data/icons'

const Skills = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Skills</h2>
      <div className="space-y-3">
        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-gray-500 ">Codebase: </span>
          </dt>
          <dd>
            <ul>
              {skills.programmingLanguages.map((skill, index) => (
                <li
                  key={index}
                  className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800"
                >
                  <img
                    src={icons[skill.name.toLowerCase()]}
                    className="shrink-0 size-4 me-1 rounded-sm"
                  />
                  {skill.name}
                </li>
              ))}
            </ul>
          </dd>
        </dl>
        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-gray-500 ">TechStack: </span>
          </dt>
          <dd>
            <ul>
              {skills.techStack.map((skill, index) => (
                <li
                  key={index}
                  className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800"
                >
                  <img
                    src={icons[skill.name.toLowerCase()]}
                    className="shrink-0 size-4 me-1 rounded-sm"
                  />
                  {skill.name}
                </li>
              ))}
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  )
}

export default Skills
