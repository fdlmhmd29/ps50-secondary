/** @jsx jsx */

// Red Circles
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Button } from "theme-ui";
import { StaticImage } from "gatsby-plugin-image";

// Yellow Circles
import ShapeLeft from "assets/shape-left.png";
import ShapeRight from "assets/shape-right.png";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
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
          <Button variant="primary">Explore</Button>
        </Box>

        <StaticImage src="../assets/images/smm.svg" />
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
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
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
  },
  text: {
    header: {
      textAlign: "center",
      color: "heading",
    },
    content: {
      textAlign: "center",
      color: "text",
    },
  },
};
