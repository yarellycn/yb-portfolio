"use client";

import React from 'react';
import { Space } from "antd";
import { useTranslations } from "next-intl";

const About = () => {
    const t = useTranslations("About");

    return (
        <section className="about">
            <div className="aboutWrapper">
                <Space align="center" className="sunContainer">
                    <img src="/sun.png" className="aboutSun"/>
                    <img src="/sun.png" className="aboutSun"/>
                    <img src="/sun.png" className="aboutSun"/>
                </Space>
                <div className="aboutCardWrapper">
                    <div className="aboutCard">
                        <img src="/about/berger-5.jpeg" className="aboutAvatar"/>
                        <div className="aboutContent">
                            <h2 className="aboutTitle">{t("aboutTitle")}</h2>
                            <p className="aboutDesc">{t("aboutDescription")}</p>
                        </div>
                    </div>
                    <img src="/about/card-bottom.png" className="aboutCardBottom"/>
                </div>
                <Space align="center" justify="center" className="sunContainer">
                    <img src="/sun.png" className="aboutSun"/>
                    <img src="/sun.png" className="aboutSun"/>
                    <img src="/sun.png" className="aboutSun"/>
                </Space>
            </div>
            <div className="aboutCutout">
                <div className="triangle"></div>
            </div>
        </section>
    )
}

export default About;