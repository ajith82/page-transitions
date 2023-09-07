"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

import {
  titleAnimation,
  textAnimation,
  fadeInOverlay,
  // imageZoom,
} from './animations'

import Image1 from "../../../public/images/image1.jpg";

import styles from "./Hero.module.scss";

const Hero = () => {
  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef([]);

  useEffect(() => {
    titleAnimation(titleRef.current);
    textAnimation(textRef.current);
    fadeInOverlay(overlayRef.current);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.hero__overlay} ref={overlayRef}></div>
      <Image
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        fill
        className={styles.hero__image}
        src={Image1}
        alt=""
      />
      <div className={styles.hero__content}>
        <div className={styles.hero__titleWrapper}>
          <h1 className={styles.hero__title} ref={titleRef}>
            Re:Active
          </h1>
        </div>
        <p className={styles.hero__text}>
          <span>
            <span ref={(text) => textRef.current.push(text)}>
              Introducing Re:Active: a technical women&apos;s workout set
              blending
            </span>
          </span>
          <span>
            <span ref={(text) => textRef.current.push(text)}>
              style and performance.Elevate your fitness with confidence and
            </span>
          </span>
          <span>
            <span ref={(text) => textRef.current.push(text)}>
              grace. Stay cool and dry with moisture-wicking fabric. Move freely
            </span>
          </span>
          <span>
            <span ref={(text) => textRef.current.push(text)}>
              with four-way stretch and a flattering high-waisted design.
            </span>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
