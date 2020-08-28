import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Skill from "../components/Skill"

import { Mail } from '@styled-icons/heroicons-outline'
import { Phone } from '@styled-icons/heroicons-outline'
import { LocationMarker } from "@styled-icons/heroicons-outline"
import { LinkedinOutline } from "@styled-icons/evaicons-outline"

export default function Home({ data }) {
  return (
      <div className="sm:m-8">
          <div className="max-w-4xl h-full border-8 border-gray-400 rounded-sm p-4 sm:p-8 m-auto">
              <div className="flex flex-col md:flex-row justify-start">
                  <div className="sm:w-full md:w-1/2 mx-1 md:mx-2 my-2 p-2 text-center box-border">
                      <div>
                          <h1 className="font-bold text-xl tracking-widest">TOMIDE FASUGBA</h1>
                          <p className="italic text-gray-600 mb-4">Software Engineer</p>
                          <Img className="rounded-full" fixed={data.file.childImageSharp.fixed}/>
                      </div>
                  </div>
                  <div className="sm:w-full md:w-1/2 mx-1 md:mx-2 my-2 p-2 text-center box-border">
                      <div>
                          <h2 className="text-left tracking-wider border-t-2 border-b-2 py-2">CONTACT</h2>
                          <div className="border-b-2 py-1 flex justify-between">
                              <span className="leading-5"><LinkedinOutline className="mx-8" size="20"/><span className="font-black text-xl">|</span></span>
                              <a className="text-indigo-400" href="https://www.linkedin.com/in/tomide-fasugba-253b869b">https://rb.gy/dh1rzw</a>
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
                  </div>
              </div>
              <div className="flex-row justify-start">
                  <div className="my-2 p-2 text-left box-border">
                      <h2 className="text-left tracking-wider border-t-2 border-b-2 py-2 mb-2">EDUCATION </h2>
                      <div>
                          <h3 className="text-left tracking-wide">University of Manchester</h3>
                          <p className="italic text-left text-gray-600">B.Sc.(Hons) Computer Science with Industrial Experience (Second Class, Division One) 2018</p>
                          <li className="text-left tracking-wider font-medium">Relevant coursework</li>
                          <p className="text-left pyb-2">Java Object Oriented Programming, Fundamentals of Artificial Intelligence, Algorithms and Imperative Programming, Operating Systems, Software Engineering, Cryptography, User Experience, AI and Games, System Architecture, User Experience, Internet Of Things</p>
                          <li className="text-left tracking-wider">Final Year Project</li>
                          <p className="text-left">Ro-show: Built a Spring boot app for visualising research objects and designed a system for validating them through inspection of an rdf manifest using Shacl (shapes constraint language)</p>
                          <li className="text-left tracking-wider">Other Projects</li>
                          <p className="text-left">Built a game bot to play mancala using Java</p>
                          <p className="text-left">Developed a chat room with real-time language translation using HTML, CSS, Javascript, and PHP</p>
                      </div>
                  </div>
                  <div className="my-2 p-2 text-left box-border">
                      <h2 className="text-left tracking-wider border-t-2 border-b-2 py-2 mb-2">EXPERIENCE</h2>
                      <div className="mb-4">
                          <h3 className="tracking-wide text-left">Software Engineer</h3>
                          <p className="italic text-left text-gray-600">The Hut Group</p>
                          <p className="text-left">Mar. 2020 - Present</p>
                          <ul className="mt-2 list-disc list-inside text-left">
                              <li>Currently in charge of front-end firefighters; an initiative that handles urgent customer-facing issues that affect a web hosting platform comprising 100+ websites</li>
                              <li>Engineered CSS sharding across 100+ sites, reducing the css loaded in the browser to improve site performance in page load times, and baking accessibility into them</li>
                              <li>Worked alongside the talent team to conduct technical interviews for graduates</li>
                              <li>Mentoring new starters to bring them up to speed with the team's culture </li>
                              <li>Worked alongside project & product managers to oversee projects; planning deliverables and milestones, organising and managing the projects’ developers</li>
                          </ul>
                      </div>

                      <div className="mb-4">
                          <h3 className="tracking-wide text-left">Graduate Software Engineer</h3>
                          <p className="italic text-left text-gray-600">The Hut Group</p>
                          <p className="text-left">Aug. 2018 - Mar. 2020</p>
                          <ul className="mt-2 list-disc list-inside text-left">
                              <li>First line support, bug investigation, documentation and fixes</li>
                              <li>Led performance improvement of a monolith application, purging deprecated/redundant libraries, remove legacy code, made websites using separate mobile and desktop pages responsive (hence cutting page sizes by almost 50%)</li>
                              <li>Engineered attack mitigation strategies for website forms using Recaptcha, in order to prevent denial of service attacks</li>
                          </ul>
                      </div>
                      <div className="mb-4">
                          <h3 className="tracking-wide text-left">Intern Software Engineer</h3>
                          <p className="italic text-left text-gray-600">Mentor Graphics; a Siemens Company</p>
                          <p className="text-left">Jul. 2016 - Jun. 2017</p>
                          <ul className="mt-2 list-disc list-inside text-left">
                              <li>Bug investigation, documentation, and fixes</li>
                              <li>Developed UI components for a Wire-framing desktop app in Java using Swing</li>
                          </ul>
                      </div>
                      <div>
                          <h3 className="tracking-wide text-left">Engineering Intern</h3>
                          <p className="italic text-left text-gray-600">ATG Access Limited</p>
                          <p className="text-left">Aug. 2015 - Sept. 2015</p>
                          <ul className="mt-2 list-disc list-inside text-left">
                              <li>Occasionally partook in bollard installation on-site</li>
                              <li>Worked with site engineers and electrical engineers to develop specification documents for security bollards</li>
                              <li>Researched competitors' business and specification documents to inform my task of developing specification documents for ATG Access</li>
                          </ul>
                      </div>
                  </div>
                  <div className="my-2 p-2 text-left box-border">
                      <h2 className="text-left tracking-wider border-t-2 border-b-2 py-2 mb-2">PROJECTS</h2>
                      <div className="mb-4">
                          <h3 className="text-left tracking-wide">MY CV</h3>
                          <p className="text-left pyb-2">Built out my cv using React Gatsby for performance and scalability, graphQL, tailwind CSS, purgeCSS for cutting out unused css code (introduced by tailwind CSS) from the production build, and puppeteer for generating PDFs</p>
                      </div>
                  </div>
                  <div className="my-2 p-2 text-left box-border">
                      <h2 className="text-left tracking-wider border-t-2 border-b-2 py-2 mb-2">SKILLS</h2>
                      <div className="text-left">
                          <Skill skillName={"Object-oriented programming"}/>
                          <Skill skillName={"Full stack web development"}/>
                          <Skill skillName={"Teaching"}/>
                          <Skill skillName={"Java"}/>
                          <Skill skillName={"Javascript"}/>
                          <Skill skillName={"Sass"}/>
                          <Skill skillName={"HTML"}/>
                          <Skill skillName={"SQL"}/>
                          <Skill skillName={"Python"}/>
                          <Skill skillName={"Docker"}/>
                          <Skill skillName={"React"}/>
                          <Skill skillName={"Project management"}/>
                          <Skill skillName={"Mentoring"}/>
                          <Skill skillName={"Haskell"}/>
                          <Skill skillName={"SCRUM"}/>
                          <Skill skillName={"Customer Service"}/>
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
