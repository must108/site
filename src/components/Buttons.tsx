import React from "react";
import { BsGithub, BsDiscord, BsLinkedin } from 'react-icons/bs';
import Resume from './ResumeSymbol';
import { IconType } from 'react-icons';

export default function Buttons() {
    return (
        <>
            <div className="flex justify-center gap-3">
				<a href="/resume.pdf" target="_blank" 
					className="cursor-pointer">
					<Resume />
				</a>
				<a href="https://github.com/must108" 
					target="_blank" 
					className="cursor-pointer">
					<div className="bg-button-color p-2 
						rounded-lg fill-current text-white 
						hover:text-neutral-400 transition-colors 
						duration-300 text-2xl">
						<BsGithub />
					</div>
				</a>
				<a href="https://www.linkedin.com/in/mustaeenahmed/" 
					target="_blank" 
					className="cursor-pointer">
					<div className="bg-button-color p-2 rounded-lg 
						fill-current text-white hover:text-neutral-400 
						transition-colors duration-300 text-2xl">
						<BsLinkedin />
					</div>
				</a>
				<a 
					href="https://discordapp.com/users/385903323666055178" 
					target="_blank">
					<div className="bg-button-color p-2 rounded-lg 
						fill-current text-white hover:text-neutral-400 
						transition-colors duration-300 text-2xl">
						<BsDiscord />
					</div>
				</a>
			</div>
        </>
    )
}