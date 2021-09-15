/** @jsx jsx */

// Red Circles
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Button, Image } from "theme-ui";

// Yellow Circles
import PatternBG from "assets/patternBG.png";
import developer from "assets/svg/developer.svg";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      {/* 
      styles.banner.container
      css-1cxyi2a-Banner 
      */}
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading sx={styles.text.header} as="h1" variant="heroPrimary">
            Digital Agency terpercaya di Indonesia
          </Heading>
          <Text sx={styles.text.content} as="p" variant="heroSecondary">
            Kami hadir sebagai pionir Startup Digital Agency untuk membantu
            pelaku bisnis Micro-Small-Medium Enterprise (UMKM) untuk memperluas
            jangkauan pasar dan meningkatkan branding terutama di Social Media.
          </Text>
          <Button sx={styles.banner.justBtn} variant="primary">
            Explore
          </Button>
        </Box>
        <Box>
          <Image src={developer} />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    backgroundColor: "primary",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [8, null, 9, null, null, 10],

    // Container
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: ["wrap", null, null, "nowrap"],
      pb: [null, "145px", "155px", "170px", null, null, "1px", "215px"],
      pt: ["40px", "145px", "155px", "170px", null, null, "1px", "215px"],
    },

    // Content Box
    contentBox: {
      // width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "left",
      pb: ["20px", "145px", "155px", "170px", null, null, "21px", "215px"],
      pt: [null, "145px", "155px", "170px", null, null, "1px", "215px"],
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
    header: {
      textAlign: "left",
      color: "white",
    },
    content: {
      textAlign: "left",
      color: "white",
    },
  },
};
