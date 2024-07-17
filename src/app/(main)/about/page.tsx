"use client";

import AnimatedLink from "@/components/AnimatedLink";
import Tech from "@/components/Tech";
import { useEffect } from "react";
import Metadata from "@/components/Metadata";

export default function About() {
    useEffect(() => {
      const page = document.getElementById("page");
      page?.classList.remove('page-transition');
  }, []);

    return (
       <section className="max-w-screen-sm p-4 page-transition mb-40 sm:mb-0" id="page">
         <Metadata title="About" description="Mustaeen Ahmed is a software engineer and a student at the University of Central Florida." />
           <h1 
           className="flex text-white font-bold mx-auto
           text-3xl pb-8"
           >
               about
           </h1>
           <div className="flex flex-col gap-10">
             <p 
             className="text-white
             text-md pt-2"
             >
                 i&apos;m a software engineer and an undergraduate
                 computer science student at{" "}
                 <AnimatedLink href="https://www.ucf.edu/"
                 >
                   UCF
                 </AnimatedLink>
                 . i currently work as a software engineer at{" "}
                 <AnimatedLink href="https://www.darden.com/"
                 >
                   Darden
                 </AnimatedLink>
                 , where I work on automating critical processes to
                 expedite our workflows.
             </p>
             <p className="text-white text-md">
               i have a deep passion for several fields in computer science, including
               machine learning, data analytics, full-stack web/mobile development, and 
               computer vision. these passions stem from a love of learning and creating, 
               and they thrive, as there is always something new to learn in this industry.
             </p> 
             <p className="text-white text-md">
               since i started working in this field, i&apos;ve
               gained quite a few technical skills. here are some of them: 
             </p>
           </div>
           <Tech />
       </section>

    );
}
