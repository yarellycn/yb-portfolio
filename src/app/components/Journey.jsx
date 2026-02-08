"use client";

import { React } from 'react';
import { useTranslations } from "next-intl";
import JourneyCard from './JourneyCard';

const Journey = () => {
    const t = useTranslations("Journey");

    const journeyKeys = [
        "2010",
        "2014",
        "2019",
        "2020",
        "2022",
        "2025"
    ];

    return (
        <section className="journey">
            <div className="journeyHeader">
                <h2 className='containerTitle'>{t("title")}</h2>
            </div>
            <div className="journeyWrapper">
                <div className="journeyBackground"> 
                <img src="journey/peru.png" className="peruBackground"/>
                <img src="journey/france.png" className="franceBackground" />
                </div>
                <div className="journeyCardWrapper">
                {journeyKeys.map((key, index) => (
                    <JourneyCard key={key} journeyKey={key} index={index}/>
                ))}
                </div>
            </div>
        </section>
    )
}

export default Journey;