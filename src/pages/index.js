import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { Mail } from '@styled-icons/heroicons-outline';
import { Briefcase } from '@styled-icons/heroicons-outline';
import { Phone } from '@styled-icons/heroicons-outline';
import { LocationMarker } from "@styled-icons/heroicons-outline";

export default function Home({ data }) {
  return (
      <div className="sm:m-8">
          <div className="flex flex-col md:flex-row justify-start max-w-4xl h-full border-8 border-gray-400 rounded-sm p-4 sm:p-8 m-auto">
              <div className="sm:w-full md:w-1/2 mx-1 md:mx-2 my-2 p-2 text-center box-border">
                  <div className="mb-8 md:mb-16">
                      <h1 className="font-bold text-xl tracking-widest">TOMIDE FASUGBA</h1>
                      <p className="italic text-gray-600 mb-4">Software Engineer</p>
                      <Img className="rounded-full" fixed={data.file.childImageSharp.fixed} />
                  </div>
                  <div className="mb-8 md:mb-16">
                      <h2 className="text-left tracking-wider border-t-2 border-b-2 py-2">CONTACT</h2>
                      <div className="border-b-2 py-1 flex justify-between">
                          <span className="leading-5"><Briefcase className="mx-8" size="20"/><span className="font-black text-xl">|</span></span>
                          <a className="text-indigo-400" href="https://www.linkedin.com/in/tomide-fasugba-253b869b">LinkedIn profile</a>
                      </div>
                      <div className="border-b-2 py-1 flex justify-between">
                          <span className="leading-5"><Mail className="mx-8" size="20"/><span className="font-black text-xl">|</span></span>
                          <span>jnrfash@icloud.com</span>
                      </div>
                      <div className="border-b-2 py-1 flex justify-between">
                          <span className="leading-5"><Phone className="mx-8" size="20"/><span className="font-black text-xl">|</span></span>
                          <p>+44 7494230896</p>
                      </div>
                      <div className="border-b-2 py-1 flex justify-between">
                          <span className="leading-5"><LocationMarker className="mx-8" size="20"/><span className="font-black text-xl">|</span></span>
                          <p>Manchester, UK</p>
                      </div>
                  </div>
                  <div className="mb-8 md:mb-16">
                      <h2 className="text-left tracking-wider border-t-2 border-b-2 py-2 mb-2">EDUCATION </h2>
                      <div className="mb-4">
                          <h3 className="text-left">B.Sc. Computer Science with Industrial Experience</h3>
                          <p className="italic text-left text-gray-600">The University of Manchester</p>
                          <p className="text-left">Sept. 2014 - Jun. 2018</p>
                      </div>
                      <div>
                          <h3 className="text-left">Foundation Degree, Science and Engineering</h3>
                          <p className="italic text-left text-gray-600">INTO London World Education Centre</p>
                          <p className="text-left">Jan. 2014 - Sept. 2014</p>
                      </div>
                  </div>
                  <div>
                      <h2 className="text-left tracking-wider border-t-2 border-b-2 py-2 mb-2">TECHNICAL SKILLS</h2>
                      <div className="text-left">
                          <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">Object-oriented design
                          </span>
                          <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">Functional programming
                          </span>
                          <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">Full stack web development
                          </span>
                          <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">Javascript
                          </span>
                          <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">Project management
                          </span>
                          <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">Java
                          </span>
                          <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">Sass
                          </span>
                          <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">SQL/NoSQL
                          </span>
                          <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">Python
                          </span>
                          <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">Docker
                          </span>
                          <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">Jenkins
                          </span>
                          <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">Git
                          </span>
                          <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">Haskell
                          </span>
                          <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">React
                          </span>
                          <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">Mentoring
                          </span>
                          <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">SCRUM
                          </span>
                          <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">Customer Service
                          </span>
                          <span className="inline-block rounded-lg px-4 bg-gray-500 hover:bg-gray-600 border border-gray-500 hover:border-gray-600 text-black-200 text-center text-sm mx-2 my-1">Teaching
                          </span>
                      </div>
                  </div>
              </div>
              <div className="sm:w-full md:w-1/2 mx-1 md:mx-2 my-2 p-2 text-center box-border">
                  <div className="mb-8 md:mb-16">
                      <h2 className="text-left tracking-wider border-t-2 border-b-2 py-2 mb-2">EXPERIENCE</h2>
                      <div className="mb-4">
                          <h3 className="tracking-wide text-left">Software Engineer</h3>
                          <p className="italic text-left text-gray-600">The Hut Group</p>
                          <p className="text-left">Mar. 2020 - Present</p>
                          <ul className="mt-2 list-disc list-inside text-left">
                              <li>Worked alongside project & product managers to oversee projects; planning deliverables and milestones, organising and managing the projects’ developers</li>
                              <li>Currently in charge of front-end firefighters; an initiative that handles urgent customer-facing issues that affect a platform which hosts over a 100 websites</li>
                              <li>Designed, engineered, and implemented CSS sharding across 100+ sites to improve their performance in page load times, and lighthouse performance ratings</li>
                              <li>Worked alongside the talent team to conduct technical interviews for graduates</li>
                              <li>Mentoring new starters</li>
                          </ul>
                      </div>
                      <div className="mb-4">
                          <h3 className="tracking-wide text-left">Graduate Software Engineer</h3>
                          <p className="italic text-left text-gray-600">The Hut Group</p>
                          <p className="text-left">Aug. 2018 - Mar. 2020</p>
                          <ul className="mt-2 list-disc list-inside text-left">
                              <li>First line support, bug investigation, documentation and fixes</li>
                              <li>Worked on transforming a front-end platform comprising several websites from using separate mobile and desktop pages to using single responsive pages</li>
                              <li>Improved the performance of a monolith front-end application by purging deprecated/redundant libraries, and heavily refactoring the codebase</li>
                              <li>Maintained and implemented new features in backend services</li>
                              <li>Engineered implementation of form attack mitigation using Recaptcha</li>
                          </ul>
                      </div>
                      <div className="mb-4">
                          <h3 className="tracking-wide text-left">Intern Software Engineer</h3>
                          <p className="italic text-left text-gray-600">Mentor Graphics; a Siemens Company</p>
                          <p className="text-left">Jul. 2016 - Jun. 2017</p>
                          <ul className="mt-2 list-disc list-inside text-left">
                              <li>Bug investigation, documentation, and fixes</li>
                              <li>Developed additional features in an Angular JS app</li>
                              <li>Developed UI components for a Wire-framing desktop app in Java</li>
                          </ul>
                      </div>
                      <div>
                          <h3 className="tracking-wide text-left">Engineering Intern</h3>
                          <p className="italic text-left text-gray-600">ATG Access Limited</p>
                          <p className="text-left">Aug. 2015 - Sept. 2015</p>
                          <ul className="mt-2 list-disc list-inside text-left">
                              <li>Worked with site engineers and electrical engineers to develop specification documents for security bollards</li>
                              <li>Occasionally partook in bollard installation on-site</li>
                              <li>Researched competitors' business and specification documents to inform my task of developing specification documents for ATG Access</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "avatars/cv_thumbnail.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
