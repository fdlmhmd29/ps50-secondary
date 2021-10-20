/** @jsx jsx */
import { jsx, Container, Box, Image } from "theme-ui";
import TextFeature from "components/text-feature";
import { IoIosPeople, IoIosThumbsUp } from "react-icons/io";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import DrawingArrow from "assets/drawing-arrow.svg";

const data = {
  title: "Kebijakan Layanan",
  description: "Diperbaharui pada tanggal 08/10/2021",
  btnName: "Baca selengkapnya",
  btnURL: "/kebijakan/layanan",
};

export default function BusinessProfit() {
  // Graphql image query
  const dataThumb = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "layanan.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 1600
            layout: CONSTRAINED
            placeholder: BLURRED
          )
        }
      }
    }
  `);
  return (
    <section sx={{ variant: "section.profit" }}>
      <Container sx={styles.containerBox}>
        <Box id="thumbnail" sx={styles.thumbnail}>
          <GatsbyImage
            image={dataThumb.placeholderImage.childImageSharp.gatsbyImageData}
          />
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
            points={data.points}
          />
        </Box>
      </Container>
      <Box sx={styles.bottomArrow}>
        <Image src={DrawingArrow} alt="Arrow" />
      </Box>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: ["flex-Start", null, null, "space-between"],
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, null, null, null, null, null, null, 8],
  },
  thumbnail: {
    pr: [2, null, 7, 4, 7, 8, null, 10],
    pl: [0, null, 7, 0],
    display: "flex",
    order: [2, null, null, 0],
    mx: ["auto", 0],
    width: [328, "100%", null, null, 560, 690, 805],
    img: {
      ml: [0, null, null, -3],
      height: ["auto", "auto"],
    },
  },
  contentBox: {
    flexShrink: 0,
    textAlign: ["center", null, null, "left"],
    width: ["100%", null, null, 350, 400, "470px"],
    pb: [7, null, null, 0],
    pt: [7, null, null, 0],
    ".btn__link": {
      mt: [4, null, 5],
    },
  },
  bottomArrow: {
    position: "absolute",
    bottom: -185,
    left: "33%",
    display: ["none", null, null, null, null, null, null, "block"],
  },
};
