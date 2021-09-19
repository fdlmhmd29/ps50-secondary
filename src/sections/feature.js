/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Marketplace from "assets/feature/marketplace.svg";
import Gift from "assets/feature/gift.svg";
import Award from "assets/feature/award.svg";

const data = [
  {
    id: 1,
    imgSrc: Marketplace,
    altText: "Marketplace",
    title: "Mengembangkan Target Pasar",
    text: "Dengan Sosial Media, Anda dapat menentukan siapa saja calon konsumen yang akan melihat konten promosi di Sosial Media agar sesuai dengan tujuan.",
  },
  {
    id: 2,
    imgSrc: Gift,
    altText: "Gift",
    title: "Meningkatkan Profit",
    text: "Dengan strategi marketing iklan dan alur order yang tepat di sosial media, maka pelanggan potensial akan lebih mudah dikonversi.",
  },
  {
    id: 3,
    imgSrc: Award,
    altText: "Awards",
    title: "Meningkatkan Brand Awareness",
    text: "Dengan melakukan manajemen social media yang tepat, value dari brand Anda akan meningkat diiringi dengan Brand Awareness yang bagus.",
  },
];

export default function Feature() {
  return (
    <section
      sx={{ backgroundColor: "white", variant: "section.feature" }}
      id="feature"
    >
      <Container>
        <SectionHeader
          title="Murah tanpa Ribet"
          description="Miliki manajer Sosial Media profesional dengan harga terjangkau yang akan:"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, null, 4],
    pb: [0, null, null, null, null, null, null, null, 6],
    gridGap: [
      "40px",
      "45px",
      "45px 30px",
      null,
      "60px 30px",
      "50px 40px",
      null,
      "75px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(3,1fr)",
    ],
  },
};
