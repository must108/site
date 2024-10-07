"use client";

import React from "react";

import {
    FaJava,
    FaReact,
    FaRProject
} from 'react-icons/fa';

import {
    SiC,
    SiCsharp,
    SiCplusplus,
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiNumpy,
    SiHtml5,
    SiCss3,
    SiTypescript,
    SiPython,
    SiAstro,
    SiExpress,
    SiTailwindcss,
    SiBootstrap,
    SiPandas,
    SiRedis,
    SiFlask,
    SiDjango,
    SiOpencv,
    SiGit,
    SiPrisma,
    SiJupyter,
    SiMongodb,
    SiPostgresql,
    SiFigma,
    SiVercel,
    SiVitest,
    SiSupabase,
    SiAmazons3,
    SiScikitlearn,
    SiTrpc,
    SiGo,
    SiPytorch,
    SiDocker,
    SiJira,
} from 'react-icons/si';

import {
    BsGithub
} from 'react-icons/bs';

import {
    GrMysql
} from 'react-icons/gr';

import { Icons } from './Icongroup';

export default function Tech() {
    return (
        <section className="max-w-screen-sm pt-8">
            <div className='flex gap-10'>
                <div className='w-1/2 text-white flex flex-col gap-2'>
                    <Icons title="languages">
                        <SiHtml5 size={24} title="HTML" />
                        <SiCss3 size={24} title="CSS" />
                        <SiJavascript size={24} title="JavaScript" />
                        <SiTypescript size={24} title="TypeScript" />
                        <SiC size={24} title="C" />
                        <SiCplusplus size={24} title="C++" />
                        <SiCsharp size={24} title="C#" />
                        <SiGo size={24} title="Go" />
                        <FaJava size={24} title="Java" />
                        <SiPython size={24} title="Python" />
                        <FaRProject size={24} title="R" />
                    </Icons>
                    <Icons title="packages">
                        <SiScikitlearn size={24} title="scikit-learn" />
                        <SiPytorch size={24} title="PyTorch" />
                        <SiNumpy size={24} title="NumPy" />
                        {/* <Matplotlib title="Matplotlib" /> */}
                        <SiDjango size={24} title="Django" />
                        <SiFlask size={24} title="Flask" />
                        <SiOpencv size={24} title="OpenCV" />
                        <SiPandas size={24} title="Pandas" />
                    </Icons>
                </div>
                <div className="w-1/2 text-white flex flex-col gap-2 tech:gap-10">
                    <Icons title="frameworks">
                            <FaReact size={24} title="React" />
                            <SiNextdotjs size={24} title="Next.js" />
                            <SiAstro size={24} title="Astro" />
                            <SiNodedotjs size={24} title="Node.js" />
                            <SiExpress size={24} title="Express.js" />
                            <SiTailwindcss size={24} title="Tailwind CSS" />
                            <SiTrpc size={24} title="tRPC" />
                            <SiBootstrap size={24} title="Bootstrap" />
                    </Icons>
                    <Icons title="tools">
                        <SiGit size={24} title="Git" />
                        <BsGithub size={24} title="GitHub" />
                        <SiJira size={24} title="Jira" />
                        <GrMysql size={24} title="MySQL" />
                        <SiPostgresql size={24} title="PostgreSQL" />
                        <SiPrisma size={24} title="Prisma" />
                        <SiDocker size={24} title="Docker" />
                        <SiRedis size={24} title="Redis" />
                        <SiSupabase size={24} title="Supabase" />
                        <SiAmazons3 size={24} title="Amazon S3" />
                        <SiJupyter size={24} title="Jupyter Notebook" />
                        <SiMongodb size={24} title="MongoDB" />
                        <SiFigma size={24} title="Figma" />
                        <SiVercel size={24} title="Vercel" />
                        <SiVitest size={24} title="Vitest" />
                    </Icons>
                </div>
            </div>
        </section>
    )
}