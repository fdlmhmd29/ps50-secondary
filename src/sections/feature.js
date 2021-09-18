/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Performance from "assets/feature/performance.svg";
import Partnership from "assets/feature/partnership.svg";
import Subscription from "assets/feature/subscription.svg";
import Support from "assets/feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: "Social Media Engagement",
    title: "Social Media Engagement",
    text: "Layanan peningkatkan interaksi akun seperti Followers, Subscribers, Likes, dan Views secara instant untuk menambah kepercayaan konsumen dan interaksi organic terhadap brand Anda di Social Media.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: "Branding & Design",
    title: "Branding & Design",
    text: "Layanan pembuatan konten digital untuk keperluan Branding dan Marketing dengan gaya kekinian dan Ter up-to-date di Social Media.",
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: "Digital Campaign",
    title: "Digital Campaign",
    text: "Layanan manajemen iklan/campaign diberbagai Social Media dengan riset yang mendalam menggunakan cara paling efektif dan efisien untuk mencapai Goal Marketing Anda!",
  },
  {
    id: 4,
    imgSrc: Support,
    altText: "eMarketplace Engagement",
    title: "eMarketplace Engagement",
    text: "Layanan manajemen eMarketplace dengan riset yang mendalam menggunakan cara paling efektif dan efisien untuk mencapai Goal Marketing Anda!",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader
          slogan="Layanan Lainnya"
          title="Me-Maximalkan brand Anda"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
