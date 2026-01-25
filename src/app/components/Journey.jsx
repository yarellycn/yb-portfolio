"use client";

import { React } from 'react';
import { useTranslations } from "next-intl";
import JourneyCard from './JourneyCard';

const Journey = () => {
    const t = useTranslations("Journey");

    const journeyKeys = [
        "2010",
        "2011"
    ];

    return (
        <section className="journey">
            <div className="projectsHeader">
                <h2 className='containerTitle'>{t("title")}</h2>
            </div>
            {journeyKeys.map((key, index) => (
                <JourneyCard key={key} journeyKey={key} index={index}/>
            ))}
        </section>
    )
}

export default Journey;