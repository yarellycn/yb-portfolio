"use client";

import NavBar from "./Navbar";
import {useTranslations} from 'next-intl';

const Home = () => {
const t = useTranslations('Hero');

    return (
        <div className="homeContainer">
            <NavBar></NavBar>
            <div>
                <p style={{ whiteSpace: "pre-line" }}>
                    {t("homeDescription")}
                </p>
                <h1>{t("homeTitle")}</h1>
            </div>
        </div>
    )
}

export default Home;