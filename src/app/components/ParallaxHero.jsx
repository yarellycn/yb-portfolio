"use client";

import { Parallax } from "react-scroll-parallax";
import { useTranslations } from "next-intl";

const ParallaxHero = () => {
  const t = useTranslations("Hero");

  return (
    <section className="parallaxContainer">
      <Parallax speed={-17} className="parallaxLayer">
        <img
          src="hero/mountain-back.png"
          className="mountainBack"
        />
      </Parallax>

      <Parallax speed={0} className="parallaxLayer">
        <img
          src="hero/mountain-front.png"
          className="mountainFront"
        />
      </Parallax>

      <img src="sun.png" className="heroSun"></img>

      <div className="heroText">
        <h1>{t("homeTitle")}</h1>
        <p>{t("homeDescription")}</p>
      </div>

      <img src="hero/hero-llama.png" className="heroLlama"></img>
    </section>
  );
};

export default ParallaxHero;
