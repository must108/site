"use client";

import React from 'react';
import Metadata from "@/components/Metadata";
import { useEffect } from "react";
import AnimatedLink from "@/components/AnimatedLink";

const work = [
  {
    name: "darden",
    role: "software engineer",
    link: "https://www.darden.com/",
    description: "worked on automating employee workflows. also involved with application development and data analysis.",
    skills: "python, java, javafx, opencv, scikit-learn, scikit-image, pytesseract, pandas, numpy, matplotlib, yaml"
  },
  {
    name: "association for computing machinery",
    role: "software developer",
    link: "https://www.acmucf.org/",
    description: "worked on an admin tool and api for acm's website. involved with backend engineering.",
    skills: "javascript, node.js, express.js, html, css, mongodb"
  },
];

export default function Work() {
    useEffect(() => {
      const page = document.getElementById("page");
      page?.classList.remove("page-transition");
    }, []);

    return (
      <section 
      id="page" 
      className="max-w-screen-sm page-transition p-4 mb-40 sm:mb-0 overflow-scroll">
        <Metadata title="Work" description="Mustaeen Ahmed's work experience as a software engineer." />
        <h1
        className="flex text-white font-bold mx-auto text-3xl pb-5"
        >
          work
        </h1>
        <hr className="my-6 border-[#404040]"/>
        {work.map((place, _) => (
            <>
              <div className="flex flex-col gap-10">
                <div>
                  <AnimatedLink href={place.link}
                  className="text-white text-xl font-medium">
                    {place.name}
                  </AnimatedLink>
                  <p className="text-xs text-[#999]"
                  >{place.role}</p>
                  <p className="text-white text-sm pt-3">
                    {place.description}
                  </p>
                  <p className="text-[#999] text-xs">
                    {place.skills}
                  </p>
                </div>
              </div>
              <hr className="my-6 border-[#404040]"/>
            </>
        ))}
      </section>
    );
}