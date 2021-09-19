/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function ClientFeedback() {
  // Graphql image query
  const dataThumb = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "client-thumb.png" }) {
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
    <section sx={{ variant: "section.feedback" }} id="feedback">
      <Container>
        <SectionHeader
          title="Max More memahami apa yang dibutuhkan dan diharapkan"
          description="Fokus kami adalah malayani sepenuh hati."
        />

        <Box sx={styles.thumbWrapper}>
          <GatsbyImage
            image={dataThumb.placeholderImage.childImageSharp.gatsbyImageData}
          />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  thumbWrapper: {
    display: "flex",
    justifyContent: "center",
    px: 4,
    pb: [0, null, null, null, null, null, null, null, 6],
    width: [366, "100%", null, null, 960, "100%"],
    mx: "auto",
    img: {
      height: [100, "auto"],
    },
  },
};
