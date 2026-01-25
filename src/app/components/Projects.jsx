"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { useTranslations } from "next-intl";
import ProjectCard from './ProjectCard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


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
            <Swiper
                className="mySwiper" 
                slidesPerView={3}
                spaceBetween={0}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true} 
                modules={[Keyboard, Pagination, Navigation]}
            >
                {projectKeys.map((key) => (
                    <SwiperSlide>
                        <ProjectCard key={key} projectKey={key}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Projects;