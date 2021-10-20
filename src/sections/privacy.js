import React from "react";
import { Box, Container, Flex, Text, Heading } from "theme-ui";
import { Link } from "components/link";
import SectionHeader from "components/section-header";
import Accordion from "components/accordion/accordion";

const accordionData = [
  {
    isExpanded: false,
    title: "Informasi Apa Yang Kami Kumpulkan?",
    contents: (
      <div>
        <div>
          Pada saat anda mengunjungi web site ini anda mungkin memberikan
          personal information yang secara sadar didapatkan dari anda tanpa
          adanya paksaan. Personal Information Yang Anda Pilih Untuk Diberikan
        </div>
        <ol>
          <li>Registration Information</li> Pada saat anda mendaftar apa saja
          dari produk, jasa, newsletter kami, anda akan memberikan informasi
          tentang diri anda kepada kami.
          <li>Email Information</li> Apabila anda memilih untuk dihubungi oleh
          kami melalui email, kami dapat menggunakan konten dari email anda
          beserta alamat email anda dan juga respon dari kami. Kami memberikan
          proteksi yang sama untuk komunikasi elektronik ini seperti dalam kami
          mengolah informasi yang diterima melalui surat dan telepon.
        </ol>
      </div>
    ),
  },
  {
    isExpanded: false,
    title:
      "Bagaimana Kami Menggunakan Informasi Yang Anda Berikan Kepada Kami?",
    contents: (
      <div>
        <div>
          Secara umum, kami menggunakan personal information untuk kebutuhan
          administrasi dari aktivitas bisnis kami, memberikan produk dan jasa
          yang anda minta, monitor penggunaan jasa, media pemasaran dan promosi
          kami dan meningkatkan konten serta penawaran jasa kami, dan mengatur
          konten site kami, tampilan, jasa dan kebutuhan-kebutuhan lain.
          Penggunaan ini untuk meningkatkan site kami dan membuat menjadi lebih
          baik agar sesuai dengan kebutuhan anda.
        </div>
        <br />
        <div>
          Lebih lanjut, informasi seperti ini mungkin dibagikan dengan yang lain
          dengan basis yang sesuai. Informasi penting pribadi atau informasi
          bisnis tidak akan diberikan kepada pihak manapun kecuali apabila
          dibutuhkan berdasarkan hukum.
        </div>
        <br />
        <div>
          Tidak terlalu sering, kami mungkin juga menggunakan informasi yang
          kami kumpulkan untuk memberitahukan kepada anda mengenai perubahan
          penting dari Website kami, Jasa baru, dan penawaran spesial yang kami
          kira anda mungkin tertarik. Anda dapat memberitahukan kepada kami
          kapanpun apabila anda tidak ingin menerima penawaran kami dengan email
          kepada kami melalui link yang diberikan dalam newsletter.
        </div>
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Membagikan dan Menjual Informasi",
    contents: (
      <div>
        Kami tidak membagikan, menjual, meminjamkan atau menyewakan informasi
        apapun yang secara unik mengidentifikasikan seorang subscriber (seperti
        alamat email atau data personal) dengan siapapun kecuali apabila
        dibutuhkan untuk proses transaksi atau memberikan jasa yang anda minta.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Komitmen Kami Untuk Keamanan Data Pelanggan",
    contents: (
      <div>
        Tolong perhatikan bahwa informasi anda akan disimpan dan di proses pada
        komputer kami. Hukum dalam memegang data personal di United States
        mungkin lebih tidak ketat dibandingkan dengan hukum negara atau
        kewarganegaraan Anda. Untuk menjaga akses tidak sah, menjaga keakuratan
        data, dan memastikan penggunaan informasi secara tepat, kami menempatkan
        prosedur fisik, elektronik, dan manajemen untuk menjaga dan mengamankan
        informasi yang kami kumpulkan secara online.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Perlu Anda Perhatikan",
    contents: (
      <div>
        Dengan menggunakan Website kami anda perhatikan dalam pengumpulan dan
        penggunaan data personal anda sebagaimana dijelaskan dalam Privacy
        Policy ini. Kami berhak menggunakan hak dalam privacy policy ini
        kapanpun dengan atau tanpa pemberitahuan.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Modifikasi Kebijakan",
    contents: (
      <div>
        Kami mungkin merubah Privacy Policy ini dari waktu-ke-waktu.
        Apabila/kapanpun perubahan dibuat dalam privacy policy ini, kami akan
        mengirimkan email kepada pengguna yang sudah memberikan ijin kepada kami
        untuk melakukannya. Kami akan memberitahukan setiap perubahan disini,
        jadi pastikan untuk melihat secara berkala. Bagaimanapun, kami yakinkan
        apabila Privacy Policy diubah di masa yang akan datang, kami tidak akan
        menggunakan informasi personal yang telah anda berikan dibawah Privacy
        Policy ini sebagai dalih tidak konsiten dari Privacy Policy ini, tanpa
        memperhatikan konsen anda terlebih dahulu.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" sx={{ variant: "section.feedback" }}>
      <Container>
        <SectionHeader
          sx={styles.contentBox}
          title="Kebijakan Privasi"
          description="Peraturan Max More Studio dibuat untuk kenyamanan yang berlaku untuk semua pelanggan. Dengan menggunakan layanan dari Max More Studio berarti Anda telah setuju untuk aturan ini."
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Apa kamu punya pertanyaan lanjutan mengenai Kebijakan Privasi
              kami?
            </Heading>
            <Text as="p">
              Jika pertanyaan kamu belum terjawab disini, silahkan hubungi team
              Max More Studio.
            </Text>
            <Link
              sx={styles.askButton}
              target="_blank"
              href="https://wa.me/6285156935824?text=Saya%20mau%20bertanya%20lebih%20lanjut%20mengenai%20Kebijakan%20Privasi"
            >
              Saya mau Bertanya
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  contentBox: {
    pt: [10, null, null, 0],
  },
  flex: {
    flexWrap: "wrap",
    flexDirection: ["column", null, null, null, null, "row-reverse"],
    pb: ["70px", null, null, null, "90px", null, "130px"],
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 33.333%"],
    maxWidth: ["100%", null, null, "450px", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["0px", null, null, null, "0"],
    textAlign: ["center", null, null, null, null, "left"],
    mt: ["40px", null, null, null, null, "0"],
    h3: {
      fontSize: ["23px", null, null, null, "24px"],
      lineHeight: [1.5, null, null, null, 1.67],
      color: "black",
      fontWeight: 700,
      letterSpacing: "-1.5px",
      mt: "-5px",
      pr: ["0", null, null, null, null, "30px"],
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "#343D48",
      opacity: 0.7,
      mt: "10px",
      pr: ["0", null, null, null, null, "80px"],
    },
  },
  askButton: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "primary",
    textDecoration: "none",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    mt: "25px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ["0 0 100%", null, null, null, "0 0 66.666%"],
  },
};
