import React from 'react'
import ExperienceCard from './ExperienceCard'
import { experiences } from '../data/resume.js'

const Experience = () => {
  return (
    <div className="section-container">
      <h2 className="section-title">Experience</h2>

      <div>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  )
}

export default Experience
