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
        "droxyd",
        "pacman",
        "portfolio",
        "jobBoardStanley",
        "cvOnline",
    ];

    return (
        <section className="projects">
            <div className="projectsHeader">
                <h2 className='containerTitle'>{t("title")}</h2>
            </div>
            {/* <div className="swiperContainer"> */}
            <Swiper
                className="mySwiper" 
                spaceBetween={15}
                slidesPerView={1}
                slidesOffsetBefore={10}
                slidesOffsetAfter={10}
                breakpoints={{
                    768: {
                    slidesOffsetBefore: 50,
                    slidesOffsetAfter: 50,
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    centeredSlides: true,
                    initialSlide: 1,
                    }
                }}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                }}
                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev"
                }}
                modules={[Keyboard, Pagination, Navigation]}
            >
                {projectKeys.map((key) => (
                    <SwiperSlide>
                        <ProjectCard key={key} projectKey={key}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* </div> */}
            <div className="carousel-controls">
            <img src="projects/button-back.png" className="custom-prev"></img>
            <div className="custom-pagination"></div>
            <img src="projects/button-next.png" className="custom-next"></img>
            </div>
        </section>
    )
}

export default Projects;