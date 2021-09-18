/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCardColumn from "components/feature-card-column.js";
import Performance from "assets/svg/SME.svg";
import trenData from "assets/svg/trend-data.svg";
import integritas from "assets/svg/integritas.svg";
import care from "assets/svg/care.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Team Profesional",
    title: "Team Profesional",
    text: "Bisnis Anda layak mendapatkan yang terbaik oleh tim yang ahli, tanpa harus mengeluarkan biaya yang besar untuk merekrut tim sendiri.",
  },
  {
    id: 2,
    imgSrc: trenData,
    altText: "Berdasarkan Tren Data",
    title: "Berdasarkan Tren Data",
    text: "Layanan kami menggunakan trend data sebagai dasar melakukan strategi digital marketing yang terkini dan teruji.",
  },
  {
    id: 3,
    imgSrc: integritas,
    altText: "Berintegritas",
    title: "Berintegritas",
    text: "Integritas dan kejujuran adalah prinsip panduan kami.",
  },
  {
    id: 4,
    imgSrc: care,
    altText: "Memahami Anda",
    title: "Memahami Anda",
    text: "Maxmore mampu memahami akan kebutuhan dan keinginan dari pengguna jasa layanan Maxmore.",
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container id="container" sx={styles.container}>
        <SectionHeader
          slogan="Percayakan kepada Maxmore"
          title="Tumbuh bersama Maxmore"
          id="sectionHeader"
        />

        <Grid sx={styles.container.grid} id="grid">
          {data.map((item) => (
            <FeatureCardColumn
              id="featuredColumn"
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
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
  container: {
    grid: {
      width: ["100%", "80%", "100%"],
      mx: "auto",
      gridGap: [
        "35px 0",
        null,
        "40px 40px",
        "50px 60px",
        "30px",
        "50px 40px",
        "55px 90px",
      ],
      gridTemplateColumns: [
        "repeat(1,1fr)",
        null,
        "repeat(2,1fr)",
        null,
        "repeat(4,1fr)",
      ],
    },
  },
};
