"use client";

import React from 'react';
import { Space } from "antd";
import { useTranslations } from "next-intl";

const About = () => {
    const t = useTranslations("About");

    return (
        <section className="aboutContainer">
            <div className="aboutContent">
                <Space align="center" className="sunContainer">
                    <img src="/sun.png" className="aboutSun"/>
                    <img src="/sun.png" className="aboutSun"/>
                    <img src="/sun.png" className="aboutSun"/>
                </Space>
                <div className="aboutCardContainer">
                    <img src="/berger-3.JPG" className="aboutPhoto"/>
                    <div className="aboutCard">
                        <h2 className="aboutTitle">{t("aboutTitle")}</h2>
                        <p className="aboutDesc">{t("aboutDescription")}</p>
                    </div>
                    <img src="/about-card-bottom.png" className="aboutCardBottom"/>
                </div>
                <Space align="center" justify="center" className="sunContainer">
                    <img src="/sun.png" className="aboutSun"/>
                    <img src="/sun.png" className="aboutSun"/>
                    <img src="/sun.png" className="aboutSun"/>
                </Space>
            </div>
            <div className="aboutFooter">
                <div class="triangle"></div>
            </div>
        </section>
    )
}

export default About;