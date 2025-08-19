import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://static.vecteezy.com/system/resources/previews/012/991/218/non_2x/businessmen-working-and-woman-at-big-target-with-arrow-goals-and-objectives-business-grow-and-plan-goal-setting-concept-on-white-background-flat-modern-illustration-vector.jpg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                         Shaping the Future, One Vision at a Time
                      </h2>
                      <p className="mt-6 text-gray-600">
                        VISION Talk is a unique platform where you can share your thoughts, knowledge, and experiences on topics that define the Upcoming Era. It’s a space to express your perspective on the future, showcase your ideas, and inspire others. Here, your words shape your overall vision for the coming years, turning imagination into influence.
                      </p>
                      <p className="mt-4 text-gray-600">
                         VISION Talk is an innovative platform created to share inspiring ideas, experiences, and knowledge with a wide audience.It aims to empower individuals by giving them a voice to express their vision for change and growth.The platform focuses on meaningful conversations that spark curiosity and inspire action.It welcomes speakers from diverse fields — technology, education, art, business, and social causes.VISION Talk promotes open dialogue and creative thinking to solve real-world challenges.It connects dreamers, thinkers, and doers under one collaborative community.The sessions are designed to be engaging, impactful, and thought-provoking.VISION Talk values authenticity, inclusivity, and the power of storytelling.It aspires to be a launchpad for ideas that can create positive change in society.Created with passion and purpose, VISION Talk reflects the belief that every vision deserves to be heard.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}