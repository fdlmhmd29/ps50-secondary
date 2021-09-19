/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box } from "theme-ui";
import SectionHeader from "components/section-header";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Support() {
  // Graphql image query
  const dataThumb = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "support-thumb.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 2346
            layout: CONSTRAINED
            placeholder: BLURRED
          )
        }
      }
    }
  `);
  return (
    <section sx={{ variant: "section.support" }} id="support">
      <Container>
        <SectionHeader
          title="Konsultasikan lebih lanjut kepada tim Max More yang siap membantu Anda"
          description="Tim Max More akan selalu bersedia membantu dan melayani Anda"
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
    width: [360, "100%", null, null, 960, "100%"],
    img: {
      height: ["auto", "auto"],
    },
  },
};
