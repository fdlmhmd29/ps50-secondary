/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import TextFeature from "components/text-feature";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const data = {
  title: "Kami berkomitmen untuk dengan pengetahuan berbasis fakta",
  description:
    "Hasil kerja kami akan menjamin perluasan jangkauan pasar bagi bisnis Anda. Sehingga sesuai dan tepat sasaran.",
  btnName: "Pelajari selengkapnya",
  btnURL: "#",
};

export default function Knowledge() {
  // Graphql image query
  const dataThumb = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "knowledge-thumb.png" }) {
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
    <section sx={{ variant: "section.knowledge" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <GatsbyImage
            image={dataThumb.placeholderImage.childImageSharp.gatsbyImageData}
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: ["flex-Start", null, null, "space-between"],
    flexWrap: ["wrap", null, null, "nowrap"],
  },
  thumbnail: {
    pl: [0, null, null, 4, 7, 8, 9],
    pr: [0, null, null, null, 2, 9, 6],
    display: "flex",
    mx: ["auto", null, null, 0],
    width: [338, "100%", null, null, 540, 730, 670, 760],
    img: {
      height: ["auto", "auto"],
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ["center", null, null, "left"],
    width: ["100%", null, null, 365, 420, 430, "490px"],
    pb: [7, null, null, 0],
    ".description": {
      pr: [0, null, 7, 5],
    },
    ".btn__link": {
      mt: [5, null, null, 6],
    },
  },
};
