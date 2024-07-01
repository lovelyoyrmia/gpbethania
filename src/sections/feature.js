import React, { useRef } from "react";
import { Box, Container, Text, Heading } from "theme-ui";
import BlockTitle from "components/block-title";
import Swiper from "react-id-swiper";

import FeatureCard from "components/feature-card";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const FeatureData = [
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/gpbethania-6b529.appspot.com/o/gp1.JPG?alt=media",
    title: "How to work with prototype design with adobe xd featuring tools",
    comments: "22 Comments",
    path: "/",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/gpbethania-6b529.appspot.com/o/gp2.JPG?alt=media",
    title: "Create multiple artboard by using figma prototyping development",
    comments: "15 Comments",
    path: "/",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/gpbethania-6b529.appspot.com/o/gp3.JPG?alt=media",
    title:
      "Convert your web layout theming easily with sketch zeplin extension",
    comments: "12 Comments",
    path: "/",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/gpbethania-6b529.appspot.com/o/gp4.JPG?alt=media",
    title:
      "Convert your web layout theming easily with sketch zeplin extension",
    comments: "12 Comments",
    path: "/",
  },
  {
    image:
      "https://firebasestorage.googleapis.com/v0/b/gpbethania-6b529.appspot.com/o/gp5.JPG?alt=media",
    title:
      "Convert your web layout theming easily with sketch zeplin extension",
    comments: "12 Comments",
    path: "/",
  },
  // {
  //   image: featureImage3,
  //   title:
  //     "Convert your web layout theming easily with sketch zeplin extension",
  //   comments: "12 Comments",
  //   path: "/",
  // },
  // {
  //   image: featureImage3,
  //   title:
  //     "Convert your web layout theming easily with sketch zeplin extension",
  //   comments: "12 Comments",
  //   path: "/",
  // },
];

const Feature = () => {
  const ref = useRef(null);
  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };
  const params = {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 5,
      },
      376: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 5,
      },
      576: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 30,
      },
    },
  };
  return (
    <Box sx={styles.features} id="galeri">
      <Container>
        <BlockTitle
          slogan="Galeri Kami"
          title="Kumpulan Foto GP Bethania"
          styles={styles.blockTitle}
        />

        <Swiper {...params} ref={ref}>
          {FeatureData.map((feature, index) => (
            <div className="swiper-slider" key={`feature-card-key${index}`}>
              <FeatureCard
                image={feature.image}
                title={feature.title}
                commentCount={feature.comments}
                path={feature.path}
              />
            </div>
          ))}
        </Swiper>
        <Box sx={styles.carouselBtns}>
          <button aria-label="left btn" onClick={goPrev}>
            <FaLongArrowAltLeft />
          </button>
          <button onClick={goNext} aria-label="right btn">
            <FaLongArrowAltRight />
          </button>
        </Box>
        <Box sx={styles.containerSeeAll}>
          <button>See all</button>
        </Box>
      </Container>
    </Box>
  );
};

export default Feature;

const styles = {
  blockTitle: {
    textAlign: "center",
  },
  features: {
    pt: ["80px", null, null, null, null, null, "120px"],
    pb: ["80px", null, null, null, "170px"],
    // backgroundColor: "#F8FAFC",
    ".swiper-slider": {
      overflowY: "visible",
      overflowX: "hidden",
    },
  },
  carouselBtns: {
    display: ["flex", null, null, null, null, "none"],
    justifyContent: "center",
    alignItems: "center",
    button: {
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      fontSize: [2, null, 4, null, 5],
      color: "#BBC7D7",
      width: "auto",
      padding: [0],
      margin: "0 5px",
      mt: "15px",
      transition: "500ms",
      "&:hover, &:active, &:focus": {
        color: "primary",
      },
    },
  },
  containerSeeAll: {
    width: "100%",
    textAlign: "center",
    padding: "20px",
    button: {
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      fontSize: [2, null, 4, null, 5],
      color: "#BBC7D7",
      width: "auto",
      padding: [0],
      margin: "0 5px",
      mt: "15px",
      transition: "500ms",
      "&:hover, &:active, &:focus": {
        color: "primary",
      },
    },
  },
};
