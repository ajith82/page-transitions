"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import Image1 from "../../../public/images/image1.jpg";

import styles from "./ImageGrid.module.scss";
// import {
//   setInitialStates,
//   moveSideImages,
//   scaleCenterImage,
//   moveUpTitle,
//   introAnimation,
// } from "./animations";

const ImageGrid = ({ timeline }) => {
  const centerImageWrapperRef = useRef(null);
  const centerImageRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const centerImageTitleRef = useRef(null);

  return (
    <section className={styles.imageGrid}>
      <div className={styles.imageGrid__inner}>
        <div className={styles.imageGrid__imageWrapper} ref={leftImageRef}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            fill
            className={styles.imageGrid__image}
            src={Image1}
            alt=""
          />
        </div>
        <div className={styles.imageGrid__imageWrapper}></div>
        <div
          className={styles.imageGrid__imageWrapper}
          data-wrapper-center
          ref={centerImageWrapperRef}
        >
          <div className={styles.textReveal}>
            <h2
              className={styles.imageGrid__imageTitle}
              ref={centerImageTitleRef}
            >
              Re:Active
            </h2>
          </div>
          <Image
            ref={centerImageRef}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            fill
            data-image-center
            className={styles.imageGrid__image}
            src={Image1}
            alt=""
          />
        </div>
        <div className={styles.imageGrid__imageWrapper} ref={rightImageRef}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            fill
            className={styles.imageGrid__image}
            src={Image1}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
