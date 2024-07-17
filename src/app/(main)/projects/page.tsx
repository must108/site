"use client";

import Metadata from "@/components/Metadata";
import { useEffect } from "react";

export default function Projects() {
    useEffect(() => {
      const page = document.getElementById("page");
      page?.classList.remove("page-transition");
    }, []);

    return (
      <section id="page" className="max-w-screen-sm page-transition p-4">
        <Metadata title="Projects" description="Mustaeen Ahmed's projects he has built as a software engineer." />
        <p className="text-white">wip!</p>
      </section>
    )
}