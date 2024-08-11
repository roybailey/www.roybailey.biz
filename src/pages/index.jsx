import React from "react";

export default function Index() {

    const SocialItem = (props) => {
        const {link, icon, label} = props
        return ((link)?
            <a href={link} target="_blank" className="text-current">
                <li className="text-4xl"><i className={"fb fa " + icon} aria-label={label}></i></li>
            </a>
            : "");
    }

    return (
      <div className="relative text-gray-800 bg-gray-50">
          <section className="px-10 mt-10">

              <div className="w-full h-screen bg-gray-100 px-2 pt-2">
                  <div className="relative mt-16 mb-32 max-w-lg mx-auto mt-24">

                      <div className="rounded overflow-hidden shadow-md bg-white">
                          <div className="flex flex-col items-center justify-center text-center h-screen-half">
                              <img
                                  className="object-cover w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full my-5 ring-2 ring-gray-500/50 ring-offset-[10px]"
                                  src="/img/rb-profile-2021.png"
                                  alt="Roy Bailey"/>
                              <h1 className="text-5xl md:text-6xl lg:text-8xl">Roy Bailey</h1>
                              <p className="text-center text-gray-400 text-sm md:text-base pt-3 px-3 font-normal italic font-sans">
                                  30 years experience Software Engineering...
                              </p>
                              <ul className="list-none text-center text-gray-600 text-base md:text-lg pt-3 px-3 font-normal">
                                  <li>Head of Engineering</li>
                                  <li>Software Engineering Manager</li>
                                  <li>Solutions Architect</li>
                                  <li>Full Stack Developer</li>
                                  <li>Front End Developer</li>
                                  <li>API Developer</li>
                              </ul>
                              <p className="text-center">
                                  <ul className="list-none flex gap-4 text-center text-gray-600 text-base pt-3 px-3 font-normal">
                                      <SocialItem link="https://www.linkedin.com/in/roybailey"
                                                  icon='fa-linkedin-square'
                                                  label="LinkedIn Link"/>
                                      <SocialItem link="https://github.com/roybailey"
                                                  icon='fa-github-square'
                                                  label="GitHub Link"/>
                                      <SocialItem link="http://twitter.com/roybaileybiz"
                                                  icon='fa-twitter-square'
                                                  label="Twitter Link"/>
                                  </ul>
                              </p>
                              <p className="text-center text-base px-3 pb-4 font-normal flex flex-col gap-2">
                                  <div className="text-sm md:text-base text-gray-400 italic font-sans">Available or fractal work through my company...</div>
                                  <a href="https://odinium.com" className="font-bold text-current text-lg md:text-2xl underline">Odinium Ltd</a>
                              </p>
                          </div>
                      </div>

                  </div>
              </div>

          </section>
          <div className="h-10">
          </div>
      </div>
    );
}
