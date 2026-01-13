"use client";

import { Parallax } from "react-scroll-parallax";
import { useTranslations } from "next-intl";

const ParallaxHero = () => {
  const t = useTranslations("Hero");

  return (
    <section className="hero">
      <Parallax speed={-12}>
        <img
          src="/hero/mountain-back.png"
          className="mountainBack"
        />
      </Parallax>

      <Parallax speed={-14}>
        <img
          src="/hero/mountain-front.png"
          className="mountainFront"
        />
      </Parallax>

      <img src="/sun.png" className="heroSun"></img>

      <Parallax speed={-5}>
        <div className="heroText">
          <h1>{t("homeTitle")}</h1>
          <p>{t("homeDescription")}</p>
        </div>
      </Parallax>

      <img src="hero/hero-llama.png" className="heroLlama"></img>
    </section>
  );
};

export default ParallaxHero;
