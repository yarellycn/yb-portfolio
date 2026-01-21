"use client";

import React from 'react';
import { useTranslations } from "next-intl";


const ProjectCard = ({projectKey}) => {
    const t = useTranslations(`Projects.${projectKey}`);

    return (
        <article className="cardWrapper">
            <img src={t("imgSource")}/>
            <h3>{t("title")}</h3>
            <p className="yearDescription">{t("year")}</p>
            <p>{t("description")}</p>
        </article> 
    )
}

export default ProjectCard;