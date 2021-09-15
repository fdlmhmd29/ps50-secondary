/** @jsx jsx */
import { jsx, Container, Box, Image } from "theme-ui";
import TextFeature from "components/text-feature";

import branding from "assets/svg/branding.svg";

const data = {
  subTitle: "Core features",
  title: "Smart Jackpots that you may love this anytime & anywhere",
  description:
    "Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.",
  btnName: "Get Started",
  btnURL: "#",
};

export default function CoreFeature() {
  // Graphql image query
  return (
    <section sx={{ variant: "section.coreFeature" }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={branding} />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: ["wrap", null, null, "nowrap"],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, "30px", 0],
    textAlign: ["center", null, null, "left"],
    width: ["100%", "80%", null, 340, 400, 430, null, 485],
    pb: ["50px", "60px", null, 0],
    mx: ["auto", null, null, 0],
    ".description": {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: "inline-flex",
    position: "relative",
    mr: "auto",
    ml: ["auto", null, null, null, 7],
    width: [335, "100%", 620, 380, 510, 620],
    "> img": {
      position: "relative",
      zIndex: 1,
      height: [310, "auto"],
    },
  },
};
