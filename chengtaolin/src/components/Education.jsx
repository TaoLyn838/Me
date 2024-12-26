import React from 'react'
import { education } from '../data/resume'
import EducationCard from './EducationCard'

const Education = () => {
  return (
    <div className="section-container">
      <div className="section-title">Education</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {education.map((edu, index) => (
          <EducationCard key={index} edu={edu} />
        ))}
      </div>
    </div>
  )
}

export default Education
