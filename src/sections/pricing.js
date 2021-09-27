/** @jsx jsx */
import { useState } from "react";
import { keyframes } from "@emotion/react";
import { jsx, Box, Container, Flex, Text } from "theme-ui";

import SectionHeader from "components/section-header";
import PriceTable from "components/cards/price-table";
import Switch from "components/switch";

const data = [
  {
    id: 1,
    title: "Paket Lite",
    subtitle: "Untuk mereka yang baru mau mencoba",
    amount: {
      monthly: 149000,
      annual: 34000 * 4,
    },
    isRecommended: false,
    buttonText: "Pilih",
    features: [
      {
        id: 1,
        isAvailable: true,
        title:
          "Mendapatkan 8 design (6 postingan feed dan 2 Instagram Stories)",
      },
      {
        id: 2,
        isAvailable: true,
        title: `Konsep desain ditentukan oleh Max More`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Gratis revisi (maksimal 2x/desain)`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Pilih warna desain yang kamu mau`,
      },
      {
        id: 5,
        isAvailable: false,
        title: `Ide konten (boleh request)`,
      },
    ],
  },
  {
    id: 2,
    title: "Paket Standar",
    subtitle: "For the Pro users who work with modern data stack",
    amount: {
      monthly: 299000,
      annual: 69300 * 4,
    },
    isRecommended: false,
    buttonText: "Pilih",
    features: [
      {
        id: 1,
        isAvailable: true,
        title:
          "Mendapatkan 12 design (9 postingan feed dan 3 Instagram Stories)",
      },
      {
        id: 2,
        isAvailable: true,
        title: `Konsep desain kamu yang tentukan`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Ide konten (boleh request)`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Gratis revisi (maksimal 4x/desain)`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Pilih warna desain yang kamu mau`,
      },
    ],
  },
  {
    id: 3,
    title: "Paket Premium",
    subtitle: "For the Pro users who work with modern data stack",
    amount: {
      monthly: 599000,
      annual: 129900 * 4,
    },
    isRecommended: true,
    buttonText: "Pilih",
    features: [
      {
        id: 1,
        isAvailable: true,
        title:
          "Mendapatkan 20 design (15 postingan feed dan 5 Instagram Stories)",
      },
      {
        id: 2,
        isAvailable: true,
        title: `Semua yang ada pada paket Lite & Standar`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Gratis revisi (maksimal 8x/desain)`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Copywriting caption setiap feed`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Hashtag tetarget pada setiap feed`,
      },
    ],
  },
];

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handlePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Box as="section" id="pricing" sx={styles.section}>
      <Container>
        <SectionHeader
          sx={styles.heading}
          title="What deal suit you perfect"
          description="Meet our pricing plan"
        />
        <Flex sx={styles.priceSwitcher}>
          <Text as="span">Semingguan</Text>
          <Switch isMonthly={isMonthly} handlePlan={handlePlan} />
          <Text as="span">Sebulanan</Text>
        </Flex>
        <Box sx={styles.priceWrapper}>
          {data?.map((price, index) => (
            <PriceTable
              price={price}
              isAnnual={!isMonthly}
              key={`${isMonthly}-${index}`}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  section: {
    backgroundColor: "#F9FAFC",
    pt: [11],
    pb: [11],
  },
  heading: {
    mb: 3,
    h2: {
      fontSize: [6, null, null, 8],
    },
    p: {
      color: "#858B91",
      fontSize: 3,
      m: ["10px auto", null, null, "0 auto"],
    },
  },
  priceSwitcher: {
    display: "flex",
    alignItems: "center",
    margin: [
      "35px auto 50px",
      null,
      null,
      "0 auto 30px",
      null,
      "60px auto 50px",
    ],
    maxWidth: 300,
    p: 2,
    span: {
      color: "text",
      fontWeight: 500,
      outline: 0,
      p: 0,
      minHeight: "auto",
    },
  },
  priceWrapper: {
    display: ["block", null, null, "flex"],
    alignItems: "center",
    justifyContent: "center",
    ".priceCard": {
      ".priceHeader": {
        animation: `${fadeIn} 0.8s linear`,
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s linear`,
      },
      ".priceAmount": {
        animation: `${fadeIn} 0.9s linear`,
      },
      ".priceButton": {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
