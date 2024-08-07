"use client";

import React from "react";
import NavLink from "./NavLink";

export default function Navbar() {

    return (
        <nav className="flex justify-center">
            <div className="flex mx-auto
            p-4 z-[100] h-36 items-center">
                <div className="text-white text-left gap-4 
                flex flex-row"
                >
                    <NavLink href="/">
                        home
                    </NavLink>
                    <NavLink href="/about">
                        about
                    </NavLink>
                    <NavLink href="/work">
                        work
                    </NavLink>
                    <NavLink href="/projects">
                        projects
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}