/** @jsx jsx */

// Red Circles
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Button, Image } from "theme-ui";

// Yellow Circles
import PatternBG from "assets/patternBG.png";
import developer from "assets/svg/developer.svg";

export default function Banner() {
  return (
    <section sx={styles.banner} id="section">
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
          <Button sx={styles.banner.justBtn} variant="primary">
            Explore
          </Button>
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
    // pt: ["0px", "0px", "0px", "0px", "0px", "150px", "0px", "0px"],
    // pb: ["0px", "0px", "0px", "0px", "0px", "90px", "0px", "0px"],
    // px: ["0px", "0px", "0px", "0px", "0px", "70px", "0px", "0px"],
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
      mx: ["0px", "0px", "0px", "0px", "0px", "150px", "0px", "0px"],
      pt: ["83px", "108px", null, "0px", "0px", "150px", "0px", "0px"],
      pb: ["0px", "0px", "0px", "0px", "0px", "90px", "0px", "0px"],
      px: ["24px", "24px", null, "0px", "0px", "70px", "0px", "0px"],
    },

    // Content Box
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "left",
      mb: ["25px", "25px", null, "0px", "0px", "150px", "0px", "0px"],
      pt: ["25px", "0px", "0px", "0px", "0px", "150px", "0px", "0px"],
      pb: ["0px", "0px", "0px", "0px", "0px", "90px", "0px", "0px"],
      px: ["0px", "0px", "0px", "0px", "0px", "70px", "0px", "0px"],
    },

    // Image Box
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      width: ["100%", null, null, 720, "100%", 1000],
      mx: "auto",
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
      mb: ["25px", "25px", null, "0px", "0px", "150px", "0px", "0px"],
    },
    content: {
      textAlign: "left",
      color: "white",
      mb: ["25px", "25px", null, "0px", "0px", "150px", "0px", "0px"],
    },
  },
  img: {
    pb: ["25px", "25px", null, "0px", "0px", "90px", "0px", "0px"],
  },
};
