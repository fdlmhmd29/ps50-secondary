/** @jsx jsx */

// Red Circles
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Button, Image } from "theme-ui";
import { Link } from "react-scroll";

// Yellow Circles
import PatternBG from "assets/patternBG.png";
import developer from "assets/svg/developer.svg";

export default function Banner() {
  return (
    <section sx={styles.banner} id="beranda">
      {/* 
      styles.banner.container
      css-1cxyi2a-Banner 
      */}
      <Container sx={styles.banner.container} id="container">
        <Box sx={styles.banner.contentBox} id="contentBox">
          <Heading
            sx={styles.text.heading}
            id="heading"
            as="h1"
            variant="heroPrimary"
          >
            Digital Agency terpercaya di Indonesia
          </Heading>
          <Text
            sx={styles.text.content}
            id="content"
            as="p"
            variant="heroSecondary"
          >
            Kami hadir sebagai pionir Startup Digital Agency untuk membantu
            pelaku bisnis Micro-Small-Medium Enterprise (UMKM) untuk memperluas
            jangkauan pasar dan meningkatkan branding terutama di Social Media.
          </Text>
          <Link
            activeClass="active"
            to="feature"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <Button sx={styles.banner.justBtn} variant="primary">
              Lanjutkan
            </Button>
          </Link>
        </Box>
        <Box id="img" sx={styles.img}>
          <Image src={developer} />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    position: "relative",
    zIndex: 2,
    backgroundColor: "primary",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",

    // Container
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: ["wrap", null, null, "nowrap"],
      width: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%"],
      pt: ["96px", "108px", null, "109px", "108px", "142px", "154px", "0px"],
      pb: [
        "97px", // < 414
        "145px", // > 414
        "10px",
        "50px",
        "50px",
        "65px",
        "110px",
        "0px",
      ],
      px: ["24px", "34px", null, "50px", "50px", "100px", "30px", "0px"],
    },

    // Content Box
    contentBox: {
      width: ["100%", "100%", "100%", null, "100%", "100%", "100 %", "100%"],
      textAlign: "left",
      mr: ["0px", "0px", null, "25px", "25px", "25px", "0px", "0px"],
      mb: ["25px", "25px", null, "0px", "0px", "25px", "0px", "0px"],
      pt: ["25px", "0px", "0px", "0px", "0px", "0px", "0px", "0px"],
      px: ["0px", "0px", null, "0px", "0px", "0px", "0px", "0px"],
    },

    // Image Box
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      width: ["100%", null, null, 720, "100%", 1000],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
    justBtn: {
      backgroundColor: "justBtn",
      color: "text",
      fontWeight: "bold",
    },
  },
  text: {
    // Heading
    heading: {
      textAlign: "left",
      color: "white",
      width: ["100%", "100%", "100%", null, "100%", "100%", "100 %", "100%"],
      mb: ["25px", "25px", null, "25px", "25px", "25px", "25px", "25px"],
    },
    content: {
      textAlign: "left",
      color: "white",
      width: ["100%", "100%", "100%", "100%", "100%", "100%", "100 %", "100%"],
      mb: ["25px", "25px", null, "25px", "25px", "25px", "25px", "25px"],
    },
  },
  img: {
    width: ["100%", "100%", "100%", "100%", "100%", "100%", "100 %", "100%"],
    pb: ["25px", "25px", null, "0px", "0px", "90px", "0px", "0px"],
    justifyContent: "center",
    textAlign: "center",
    display: "inline-flex",
  },
};
