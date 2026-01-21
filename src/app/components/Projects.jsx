"use client";

import React from 'react';
import { Space } from "antd";
import { useTranslations } from "next-intl";
import ProjectCard from './ProjectCard';


const Projects = () => {
    const t = useTranslations("Projects");
    const projectKeys = [
        "cvOnline",
        "jobBoardStanley",
        "portfolio",
        "pacman"
    ];

    return (
        <section className="projects">
            <div className="projectsHeader">
                <h2 className='containerTitle'>{t("title")}</h2>
            </div>
            <div className="projectsGrid">
                {projectKeys.map((key) => (
                    <ProjectCard key={key} projectKey={key}/>
                ))}
            </div>
        </section>
    )
}

export default Projects;