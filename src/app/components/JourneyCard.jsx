"use client";

import { React, useRef } from 'react';
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "motion/react"


const JourneyCard = ({journeyKey, index}) => {
    const t = useTranslations(`Journey.${journeyKey}`);
    const ref = useRef(null);
    const isRightAligned = index % 2 === 0;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 20%", "end 80%"]
    })
    const scale = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        [1, 1.15, 1.15, 1.15, 1]
    )

    return (
        <motion.div
            ref={ref}
            style={{
                    scale: scale,
                }}
            className={`motion ${isRightAligned ? 'right' : 'left'}`}
        >
            <article className={`journeyCard ${isRightAligned ? 'right' : 'left'}`}>
                <img src={t("imgSource")} className="journeyAvatar"/>
                <div className="journeyContent">
                    <div>
                        <h3>{t("title")}</h3>
                        <p className="yearDescription">{t("year")}</p>
                    </div>
                    <p className="journeyDescription">{t("description")}</p>
                </div>
            </article>
        </motion.div>
    )
}

export default JourneyCard;