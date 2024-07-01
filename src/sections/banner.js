import React from "react";
import { Box, Container, Grid, Button, Input, Heading, Text } from "theme-ui";

import Image from "components/image";

// import img1 from "assets/partner-1-1.png";
// import img2 from "assets/partner-1-2.png";
// import img3 from "assets/partner-1-3.png";
// import gp1 from "assets/gp/gp1.JPG";

import bannerImg from "assets/banner-image-1-1.png";

const Banner = () => {
  return (
    <>
      <Box sx={styles.banner} id="banner">
        {/* <Image src={gp1} alt="" /> */}
        <Container sx={styles.container}>
          <Box sx={styles.content}>
            <Heading as="h4">
              TEMA TAHUNAN GPIB <br /> 1 APRIL 2022 - 31 MARET 2023
            </Heading>
            <Text as="p">
              "Mengoptimalkan sinergi intergenerasional GPIB dengan
              mengembangkan kepemimpinan misioner dalam konteks budaya digital"{" "}
              <br /> (Efesus 4:11-16)
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Banner;

const styles = {
  banner: {
    pt: ["110px", null, null, null, "150px", "200px"],
    pb: ["50px", null, null, null, "60px", null, "0"],
    // backgroundColor: "#F6F8FB",
    // maxHeight: "50%",
    height: "740px",
    backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/gpbethania-6b529.appspot.com/o/gp1.JPG?alt=media)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
  },
  container: {
    // position: "absolute",
    // mt: "20px",
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    height: "100%",
    width: [null, null, null, null, null, null, "1390px"],
  },
  grid: {
    display: "grid",
    // gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    gridGap: "0",
  },
  content: {
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: "25px",
    padding: "20px",
    h4: {
      color: "black",
      fontWeight: "bold",
      lineHeight: [1.39],
      letterSpacing: ["-.7px", "-1.5px"],
      mb: ["15px", null, null, null, "20px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, "90%", "100%", "540px"],
      fontSize: [5, null, null, "36px", null, "40px", 9],
    },
    p: {
      fontSize: [1, null, null, 2, null, 1],
      lineHeight: ["26px", null, null, null, 2.33],
      color: "text_secondary",
      // mb: ["20px", null, null, null, null, "30px"],
      width: ["100%"],
      maxWidth: ["100%", null, null, null, null, "540px"],
      br: {
        display: ["none", null, null, null, "inherit"],
      },
    },
  },
  // form: {
  //   mb: ["30px", null, null, null, null, "60px"],
  //   display: ["flex"],
  //   input: {
  //     borderRadius: ["4px"],
  //     backgroundColor: "#fff",
  //     width: ["240px", null, null, null, "315px", null, "375px"],
  //     height: ["45px", null, null, "55px", null, null, "65px"],
  //     padding: ["0 15px", null, null, "0 25px"],
  //     fontSize: [1, null, null, 2],
  //     border: "none",
  //     outline: "none",
  //     boxShadow: "0px 10px 50px rgba(48, 98, 145, 0.08)",
  //   },
  //   button: {
  //     fontSize: [1, null, null, null, 2, "20px"],
  //     borderRadius: ["4px"],
  //     padding: ["0 15px"],
  //     ml: ["10px"],
  //     width: ["auto", null, null, null, "180px"],
  //   },
  // },
  image: {
    img: {
      display: "flex",
      mixBlendMode: "darken",
      position: "relative",
      top: ["0", null, null, null, null, "-40px"],
      maxWidth: ["100%", null, null, null, null, null, "none"],
    },
  },
  // partner: {
  //   display: "flex",
  //   flexWrap: "wrap",
  //   alignItems: "center",
  //   mb: ["40px"],
  //   "> div + div": {
  //     ml: ["10px", null, null, "20px", null, "30px"],
  //   },
  //   img: {
  //     display: "flex",
  //   },
  //   span: {
  //     fontSize: [1, null, null, null, 2],
  //     color: "#566272",
  //     lineHeight: [1],
  //     opacity: 0.6,
  //     display: "block",
  //     mb: ["20px", null, null, null, "0px"],
  //     mr: [null, null, null, null, "20px"],
  //     flex: ["0 0 100%", null, null, null, "0 0 auto"],
  //   },
  // },
};
