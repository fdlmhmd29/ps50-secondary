/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text } from "theme-ui";

import Subscribe from "components/subscribe";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

export default function Banner() {
  // Graphql image query
  const dataThumb = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "banner-thumb.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1480
            layout: CONSTRAINED
            placeholder: BLURRED
          )
        }
      }
    }
  `);
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Pengelola Sosial Media bisnis Anda
          </Heading>
          <Text as="p" variant="heroSecondary">
            Layanan lengkap manajemen akun Sosial Media mulai dari Pembuatan
            Konten, Optimisasi, Marketing dan Manajemen yang terjangkau. Serius,
            tidak mahal! Tertarik? Segera hubungi Max More
          </Text>
          <Text as="p" variant="heroSecondary"></Text>
          <Subscribe />
        </Box>
        <Box sx={styles.banner.imageBox}>
          <GatsbyImage
            image={dataThumb.placeholderImage.childImageSharp.gatsbyImageData}
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    backgroundColor: "white",
    overflow: ["hidden", "initial", null, null, "hidden"],
    pt: ["150px", "145px"],
    pb: [0, null, null, null, 2],
    container: {
      display: "flex",
      flexDirection: ["column", null, null, null, "row"],
    },
    contentBox: {
      width: ["100%", 430, 550, "75%", "50%", "45%"],
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      pt: [0, null, null, null, null, 6, 7, "70px"],
      mb: ["60px", null, null, null, 0],
      mx: [0, "auto"],
      textAlign: ["center", null, null, null, "left"],
      ".subscribe__area": {
        width: "100%",
        pr: [0, null, null, null, 6, "65px"],
        mb: ["35px", null, "45px"],
      },
    },
    imageBox: {
      justifyContent: "center",
      textAlign: ["center", null, null, null, "right"],
      mr: [0, null, null, null, null, null, -6, -7],
      pl: [0, null, "40px"],
      mb: [-2, null],
      width: [330, "100%", null, null, 480, 640, 670, 760],
      img: {
        height: ["auto", "auto"],
      },
    },
  },
  sponsorTitle: {
    fontSize: 2,
    color: "#676A8B",
    pr: [0, null, 4],
    flexShrink: 0,
    pb: [2, null, 0],
    mt: "-1px",
  },
  sponsorBox: {
    flexDirection: ["column", null, "row"],
    width: "100%",
    justifyContent: ["flex-start", null, "center", null, "flex-start"],
    sponsor: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "> a": {
        mr: [4, null, 6],
        display: "flex",
        "&:last-of-type": {
          mr: 0,
        },
      },
    },
  },
};
