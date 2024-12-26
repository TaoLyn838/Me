import React from 'react'

const EducationCard = ({ edu }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <a
        className="inline-block size-10"
        href={edu.website}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="shrink-0 size-10 mb-3 rounded-md"
          src={edu.logo_img}
          alt={edu.school}
        />
      </a>
      <h3 className="mb-1 text-xs text-gray-600">{edu.date}</h3>
      <p className="font-semibold text-sm text-gray-800">{edu.degree}</p>
      <p className="mt-1 text-sm text-gray-600">{edu.school}</p>
      {/* <p className="text-gray-600 mb-3">{edu.location}</p> */}
    </div>
  )
}

export default EducationCard
