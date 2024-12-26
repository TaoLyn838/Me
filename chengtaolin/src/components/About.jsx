import React from 'react'
import profileImage from '../assets/images/profile_image.jpeg'
import aboutMe from '../data/about'

const About = () => {
  return (
    <>
      {/* Profile */}
      <div className="flex items-center gap-x-3">
        <div class="shrink-0">
          <img
            src={profileImage}
            alt="Profile"
            className="shrink-0 size-24 rounded-md"
          />
        </div>
        <div>
          {/* <h1 className="text-lg font-medium text-gray-800 ">{aboutMe.name}</h1> */}
          {/* <p className="text-md text-gray-600">{aboutMe.role}</p> */}
          <p className="mt-3 text-sm text-gray-600">{aboutMe.description}</p>
        </div>
      </div>

      {/* Conntect */}
      <div className="mt-5">
        {/* <p className="mt-3 text-sm text-gray-600">{aboutMe.description}</p> */}
        <ul className="mt-5 flex flex-col gap-y-3">
          {aboutMe.connectLinks.map((link, index) => (
            <li key={index} className="flex items-center gap-x-2.5">
              <img
                src={link.logo}
                alt={link.platform}
                className="w-4 h-4 rounded-sm"
              />
              <a
                className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2"
                href={link.href}
                target="_blank"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default About
