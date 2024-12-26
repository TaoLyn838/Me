import React from 'react'

const ExperienceCard = ({ experience }) => {
  return (
    <div className="group relative flex gap-x-5">
      <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
        <div className="relative z-10 size-6 justify-center items-center">
          <a
            className="inline-block size-6"
            href={experience.website}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="shrink-0 size-6 rounded-md"
              src={experience.logo_img}
            />
          </a>
        </div>
      </div>
      <div className="grow pb-8 group-last:pb-0">
        <h3 className="mb-1 text-xs text-gray-600 ">{experience.date}</h3>

        <p className="font-semibold text-sm text-gray-800 ">
          {experience.position}
        </p>

        <p className="mt-1 text-sm text-gray-600">{experience.description}</p>
        <ul className="list-disc ms-6 mt-3 space-y-1.5">
          {experience.details.map((detail, index) => (
            <li key={index} className="ps-1 text-sm text-gray-600 ">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ExperienceCard
