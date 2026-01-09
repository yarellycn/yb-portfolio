"use client";

import NavBar from "./Navbar";
import ParallaxHero from "./ParallaxBanner";

const Home = () => {
    return (
        <div className="heroContainer">
            <NavBar />
            <ParallaxHero />
        </div>
    )
}

export default Home;