import React from "react";
import { Box, Container, Flex, Text, Heading } from "theme-ui";
import { Link } from "components/link";
import SectionHeader from "components/section-header";
import Accordion from "components/accordion/accordion";

const accordionData = [
  {
    isExpanded: false,
    title: "Pendahuluan",
    contents: (
      <div>
        <div>
          Terms of Service adalah hal yang utama terkait hubungan Anda dengan
          Max More Studio. Dengan menggunakan layanan Max More Studio , Anda
          menyetujui seluruh Syarat dan Kebijakan Layanan (Terms of Service)
          yang tertulis dalam dokumen ini. Layanan disediakan untuk perorangan,
          bisnis, maupun organisasi (dalam dokumen ini disebut sebagai “Pihak
          Pertama” atau “Anda”). Dengan menggunakan Layanan Max More Studio,
          Anda telah setuju dan bersedia untuk mematuhi seluruh Terms of
          Service. Jika Anda tidak setuju untuk mematuhi Terms of Service, Anda
          diharuskan untuk membatalkan account Anda secepatnya dan tidak
          diperkenankan menggunakan atau mencoba menggunakan Layanan dari Max
          More Studio.
        </div>
        <br />
        <div>
          Pengguna maupun Pelanggan Layanan yang disediakan oleh Max More Studio
          harus menerima Syarat dan Kebijakan Layanan (Terms of Service) yang
          ditetapkan di bawah ini: Anda akan menjamin dan membuat kami tetap
          terjamin dan tidak membahayakan kami dari dan terhadap pelanggaran
          Anda pada klaim apapun yang diajukan kepada kami oleh pihak ketiga
          sebagai akibat penyediaan Layanan kepada Anda oleh kami dan penggunaan
          Anda terhadap Layanan. Jika Anda melanggar suatu Terms of Service dan
          Anda tidak dapat memperbaikinya dalam tujuh (7) hari setelah
          pemberitahuan tertulis dari kami yang menetapkan pelanggaran, kami
          dapat menghentikan Perjanjian ini segera. Jika Anda adalah sebuah
          perusahaan dan jatuh ke dalam kondisi likuidasi karena pailit, atau
          memperoleh penunjukan dari administrator, atau penerima administratif,
          atau memasuki kondisi rencana sukarela dengan para kreditur Anda, kami
          berhak untuk menghentikan Perjanjian ini segera. Pada penghentian
          Perjanjian ini atau penangguhan Layanan, Max More Studio berhak segera
          menghentikan layanan yang telah Anda pesan dan tidak bertanggungjawab
          terkait hal yang menjadi akibat dari tindakan pelanggaran Anda
          lakukan.{" "}
        </div>
        <br />
        <div>
          Anda tidak berhak meminta pengembalian dana (refund) dari Max More
          Studio atas pesanan Anda sebagai akibat dari pelanggaran yang telah
          Anda lakukan. Terms of Service ini mungkin di ubah dan/atau
          diperbaharui dari waktu ke waktu tanpa pemberitahuan sebelumnya. Max
          More Studio menyarankan agar Anda membaca secara saksama dan memeriksa
          halaman Terms of Service ini dari waktu ke waktu untuk mengetahui
          perubahan apapun. Dengan tetap mengakses dan menggunakan layanan Max
          More Studio, maka pengguna dianggap menyetujui perubahan-perubahan
          dalam Syarat &amp; ketentuan
        </div>
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Kebijakan Umum",
    contents: (
      <div>
        <div>
          <strong>Cakupan</strong> – Jika Anda adalah Pelanggan perorangan,
          Terms of Service ini mengikat semua orang yang mendapatkan akses
          melalui account Anda. Jika Anda adalah Pelanggan komersial, Terms of
          Service ini berlaku untuk seluruh karyawan, agen-agen, dan/atau
          customer. Dengan kata lain, pelanggaran terhadap Terms of Service oleh
          seseorang yang menggunakan account Anda akan dianggap sebagai
          pelanggaran oleh Anda.
        </div>
        <br />
        <div>
          <strong>Jangka Waktu</strong> – Layanan ini tersedia untuk Anda selama
          Anda ingin menggunakannya, bagaimanapun juga kami berhak untuk
          menghentikan layanan jika Anda menggunakannya dengan cara yang
          melanggar persyaratan penggunaan.
        </div>
        <br />
        <div>
          <strong>Tanggung Jawab</strong>
          <div>
            <ol>
              <li>
                Dalam menggunakan setiap fitur dan/atau layanan Max More Studio
                , Pengguna dilarang untuk mengunggah atau mempergunakan
                kata-kata, komentar, gambar, atau konten apapun yang mengandung
                unsur SARA, diskriminasi, merendahkan atau menyudutkan orang
                lain, vulgar, bersifat ancaman, beriklan atau melakukan promosi
                ke situs selain Situs Max More Studio, atau hal-hal lain yang
                dapat dianggap tidak sesuai dengan nilai dan norma sosial maupun
                berdasarkan kebijakan yang ditentukan sendiri oleh Max More
                Studio. Max More Studio berhak melakukan tindakan yang
                diperlukan atas pelanggaran ketentuan ini, antara lain
                penghapusan konten, moderasi toko, pemblokiran akun, dan
                lain-lain.
              </li>
              <br />
              <li>
                Pengguna dilarang mempergunakan foto/gambar yang memiliki
                watermark yang menandakan hak kepemilikan orang lain.
              </li>
              <br />
              <li>
                Pengguna dengan ini memahami dan menyetujui bahwa penyalahgunaan
                foto/gambar yang di unggah oleh Pengguna adalah tanggung jawab
                Pengguna secara pribadi.
              </li>
              <br />
              <li>
                Ketika Pengguna mengunggah ke Situs Max More Studio dengan
                konten atau posting konten, Pengguna memberikan Max More Studio
                hak non-eksklusif, di seluruh dunia, secara terus-menerus, tidak
                dapat dibatalkan, bebas royalti, disublisensikan ( melalui
                beberapa tingkatan ) hak untuk melaksanakan setiap dan semua hak
                cipta, publisitas , merek dagang , hak basis data dan hak
                kekayaan intelektual yang Pengguna miliki dalam konten, di media
                manapun yang dikenal sekarang atau di masa depan. Selanjutnya ,
                untuk sepenuhnya diizinkan oleh hukum yang berlaku , Anda
                mengesampingkan hak moral dan berjanji untuk tidak menuntut
                hak-hak tersebut terhadap Max More Studio.
              </li>
              <br />
              <li>
                Pengguna menjamin bahwa tidak melanggar hak kekayaan intelektual
                dalam mengunggah konten Pengguna kedalam situs Max More Studio .
                Setiap Pengguna dengan ini bertanggung jawab secara pribadi atas
                pelanggaran hak kekayaan intelektual dalam mengunggah konten di
                Situs Max More Studio.
              </li>
              <br />
              <li>
                Max More Studio berhak untuk sewaktu-waktu menurunkan konten
                atau materi yang terdapat pada Feed yang dianggap melanggar
                Syarat dan Ketentuan Situs, peraturan hukum yang berlaku, serta
                etika pariwara yang berlaku.
              </li>
            </ol>
          </div>
        </div>
        <br />
        <div>
          <strong>Email dan Spam</strong>
          <div>
            <ol>
              <li>
                Max More Studio tidak bertanggung jawab atas email yang dapat
                menimbulkan kebencian, email yang dikirim berulang-ulang (mail
                bom) dan spam.
              </li>
              <br />
              <li>
                Max More Studio tidak memberikan toleransi atas email yang dapat
                menimbulkan kebencian, email yang dikirim berulang-ulang (mail
                bom) dan spam.
              </li>
              <br />
              <li>
                Max More Studio akan mengambil tindakan menutup atau
                menonaktifkan account pelanggan yang terbukti melakukan
                pelanggaran seperti di atas secara sepihak.
              </li>
            </ol>
          </div>
        </div>
        <br />
        <div>
          <strong>Penipuan</strong>
          <div>
            <ol>
              <li>
                Max More Studio tidak bertanggung jawab atas layanan yang
                teridentifikasi melakukan penipuan.
              </li>
              <br />
              <li>
                Max More Studio tidak memberikan toleransi atas layanan yang
                teridentifikasi melakukan penipuan.
              </li>
              <br />
              <li>
                Max More Studio akan mengambil tindakan menutup atau
                menonaktifkan account pelanggan yang terbukti melakukan
                pelanggaran yang melanggar hukum yang berlaku di.
              </li>
            </ol>
          </div>
        </div>
        <br />
        <div>
          <strong>Alasan Penangguhan dan Pemberhentian</strong> - Anda setuju
          untuk mematuhi Terms of Service ini. Segala bentuk pelanggaran, baik
          Terms of Service maupun aturan lain: peraturan dan kebijakan di bawah,
          dapat menjadi alasan Max More Studio menangguhkan atau menghentikan
          account Anda. Anda menyetujui Max More Studio memiliki hak, dengan
          atau tanpa pemberitahuan, menangguhkan atau menghentikan account Anda
          setelah kejadian pertama atau berikutnya dari salah satu hal berikut:
          <div>
            <ol>
              <li>
                Menggunakan Layanan dengan cara yang merupakan pelanggaran
                peraturan yang berlaku, hukum, perintah pengadilan, tarif,
                peraturan, atau perjanjian (termasuk, namun tidak terbatas pada,
                kekayaan intelektual, komunikasi, privasi, pidana, dan hukum
                internasional).
              </li>
              <br />
              <li>
                Menggunakan Layanan dengan cara yang dimaksudkan untuk
                menyalahgunakan atau melanggar privasi atau hak milik orang
                lain.
              </li>
              <br />
              <li>
                Terlibat dalam pelecehan, baik melalui bahasa, frekuensi, atau
                ukuran pesan, baik dengan email maupun konten situs.
              </li>
              <br />
              <li>
                Membantu secara langsung atau tidak langsung dalam
                menyebarluaskan materi yang memiliki hak cipta secara ilegal.
              </li>
            </ol>
          </div>
        </div>
        <br />
        <div>
          <div>
            <strong>Kebijakan Privasi</strong> - Pihak Max More Studio akan
            menjaga privasi data Anda dengan tidak akan memberikan data pribadi
            Anda dari pelanggan ke pihak ketiga manapun tanpa izin terlebih
            dahulu dari pelanggan yang bersangkutan, atau sebagaimana diperlukan
            dalam pengadilan yang sesuai atau instruksi administratif, termasuk
            panggilan sidang resmi, atau sebagaimana yang diperlukan untuk
            mengajukan Layanan. Kecuali bilamana ada permintaan dari pihak
            berwenang yang meminta informasi account anda untuk keperluan
            investigasi, proses hukum atau pelanggaran undang undang ITE.
          </div>
          <br />
          <div>
            <strong>Perselisihan</strong> - Anda menyetujui bahwa segala
            perselisihan antara Anda dan Max More Studio yang timbul karena
            penggunaan layanan oleh Anda dalam segala cara berdasarkan ikatan
            Anda sebagai pelanggan, dan/atau penggunaan Layanan yang tidak dapat
            diselesaikan antara Anda dan Max More Studio, akan didaftarkan oleh
            pihak yang dirugikan untuk mengikat arbitrase di bawah naungan
            hukum.
          </div>
          <br />
          <div>
            <strong>Hukum yang Berlaku</strong> - Layanan yang tersedia di situs
            ini tunduk pada peraturan-peraturan yang berlaku di.
          </div>
          <br />
          <div>
            <strong>Ketentuan Customer Care</strong> - Tim Customer Support
            bekerja selama 24/7 untuk membantu Anda untuk memenuhi kebutuhan
            Anda, Anda bisa menghubungi tim Customer Support Max More Studio
            melalui Live Chat yang tersedia di website maupun melalui email
            hello@Max More Studio.co.id
          </div>
          <br />
          <div>
            <strong>Ketentuan Tiket</strong> - Tim Support akan membalas ticket
            berdasarkan antrian, sehingga jika Anda membalas ticket tersebut
            akan masuk antrian terakhir. Umumnya tim kami akan merespon dalam 1
            jam setelah menerima email Anda pada jam kerja.
          </div>
        </div>
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Kebijakan Layanan",
    contents: (
      <div>
        <div>
          <strong>Kebijakan Social Media Management</strong>
          <div>
            <ol>
              <li>
                Akun media sosial yang digunakan untuk memesan layanan dari Max
                More Studio buka merupakan akun penipuan atau mengandung unsur
                negatif.
              </li>
              <li>
                Akun Media Sosial Anda akan di-manage oleh Max More Studio
                seseuai dengan layanan yang Anda pesan.
              </li>
            </ol>
          </div>
        </div>
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "Kebijakan Pembayaran",
    contents: (
      <div>
        <div>
          <strong>Kebijakan Pembayaran</strong>
          <ol>
            <li>
              Pembeli wajib bertransaksi melalui prosedur transaksi yang telah
              ditetapkan oleh Max More Studio. Pembeli melakukan pembayaran
              dengan menggunakan metode pembayaran yang sebelumnya telah dipilih
              oleh Pembeli, dan kemudian Max More Studio akan memproses order
              apabila tahapan transaksi jual beli pada sistem Max More Studio
              telah selesai.
            </li>
            <br />
            <li>
              Pembeli memahami dan menyetujui bahwa ketersediaan layanan
              merupakan tanggung jawab Max More Studio yang telah disebutkan di
              awal. Terkait ketersediaan layanan dapat berubah sewaktu-waktu,
              sehingga dalam keadaan layanan kosong, maka Max More Studio akan
              menolak order, dan pembayaran atas barang yang bersangkutan
              dikembalikan kepada Pembeli.
            </li>
            <br />
            <li>
              Pembeli memahami sepenuhnya dan menyetujui bahwa segala transaksi
              yang dilakukan antar Pembeli dan Max More Studio selain melalui
              Rekening Resmi Max More Studio dan/atau tanpa sepengetahuan Max
              More Studio (melalui fasilitas/jaringan pribadi, pengiriman pesan,
              pengaturan transaksi khusus diluar situs Max More Studio atau
              upaya lainnya) adalah merupakan tanggung jawab pribadi dari
              Pembeli.
            </li>
            <br />
            <li>
              Max More Studio memiliki kewenangan sepenuhnya untuk menolak
              pembayaran tanpa pemberitahuan terlebih dahulu.
            </li>
            <br />
            <li>
              Pembayaran oleh Pembeli wajib dilakukan segera (selambat-lambatnya
              dalam batas waktu 2 hari) setelah Pembeli melakukan check-out.
              Jika dalam batas waktu tersebut pembayaran atau konfirmasi
              pembayaran belum dilakukan oleh pembeli, Max More Studio memiliki
              kewenangan untuk membatalkan transaksi dimaksud. Pengguna tidak
              berhak mengajukan klaim atau tuntutan atas pembatalan transaksi
              tersebut.
            </li>
            <br />
            <li>
              Pembeli menyetujui untuk tidak memberitahukan atau menyerahkan
              bukti pembayaran dan/atau data pembayaran kepada pihak lain selain
              Max More Studio. Dalam hal terjadi kerugian akibat pemberitahuan
              atau penyerahan bukti pembayaran dan/atau data pembayaran oleh
              Pembeli kepada pihak lain, maka hal tersebut akan menjadi tanggung
              jawab Pembeli.
            </li>
            <br />
            <li>
              Pembeli memahami dan menyetujui bahwa masalah keterlambatan proses
              pembayaran dan biaya tambahan yang disebabkan oleh perbedaan bank
              yang Pembeli pergunakan dengan bank Rekening resmi Max More Studio
              adalah tanggung jawab Pembeli secara pribadi.
            </li>
            <br />
            <li>
              Apabila terjadi proses pengembalian dana, maka pengembalian akan
              dilakukan melalui Saldo Max More Studio milik Pengguna yang akan
              bertambah sesuai dengan jumlah pengembalian dana.
            </li>
            <br />
            <li>
              Max More Studio berwenang mengambil keputusan atas
              permasalahan-permasalahan transaksi yang belum terselesaikan
              akibat tidak adanya kesepakatan penyelesaian, baik antara Penjual
              dan Pembeli, dengan melihat bukti-bukti yang ada. Keputusan Max
              More Studio adalah keputusan akhir yang tidak dapat diganggu gugat
              dan mengikat pihak Penjual dan Pembeli untuk mematuhinya.
            </li>
            <br />
            <li>
              Pembeli wajib melakukan pembayaran dengan nominal yang sesuai
              dengan jumlah tagihan beserta kode unik (apabila ada) yang tertera
              pada halaman pembayaran. PT Nusa Digital Media tidak
              bertanggungjawab atas kerugian yang dialami Pembeli apabila
              melakukan pembayaran yang tidak sesuai dengan jumlah tagihan yang
              tertera pada halaman pembayaran.
            </li>
            <br />
            <li>
              Pembeli memahami sepenuhnya dan menyetujui bahwa invoice yang
              diterbitkan adalah atas nama Max More Studio.
            </li>
          </ol>
        </div>
        <br />
        <div>
          <strong>Kebijakan Harga</strong>
          <ol>
            <li>
              Harga Layanan yang terdapat dalam situs Max More Studio adalah
              harga yang ditetapkan oleh Max More Studio.
            </li>
            <br />
            <li>
              Pembeli memahami dan menyetujui bahwa kesalahan keterangan harga
              dan informasi lainnya yang disebabkan tidak terbaharuinya halaman
              situs Max More Studio dikarenakan browser/ISP yang dipakai Pembeli
              adalah tanggung jawab Pembeli.
            </li>
            <br />
            <li>
              Penjual memahami dan menyetujui bahwa kesalahan ketik yang
              menyebabkan keterangan harga atau informasi lain menjadi tidak
              benar/sesuai adalah tanggung jawab Pembeli.
            </li>
            <br />
            <li>
              Pengguna memahami dan menyetujui bahwa setiap masalah dan/atau
              perselisihan yang terjadi akibat ketidaksepahaman antara Max More
              Studio dan Pembeli tentang harga bukanlah merupakan tanggung jawab
              Max More Studio.
            </li>
            <br />
            <li>
              Dengan melakukan pemesanan melalui Max More Studio, Pengguna
              menyetujui untuk membayar total biaya yang harus dibayarkan
              sebagaimana tertera dalam halaman pembayaran, yang terdiri dari
              harga layanan, dan biaya-biaya lain yang mungkin timbul dan akan
              diuraikan secara tegas dalam halaman pembayaran. Pengguna setuju
              untuk melakukan pembayaran melalui metode pembayaran yang telah
              dipilih sebelumnya oleh Pengguna.
            </li>
          </ol>
        </div>
        <br />
        <div>
          <strong>Kebijakan Pengembalian Dana (Refund)</strong>
          <ol>
            <li>
              Apabila terjadi proses pengembalian dana, maka pengembalian akan
              dilakukan melalui Saldo Max More Studio milik Pengguna yang akan
              bertambah sesuai dengan jumlah pengembalian dana.
            </li>
            <br />
            <li>
              Waktu pengembalian dana (refund) akan diproses selama 2x24 jam
            </li>
            <br />
            <li>
              Jika melakukan refund pada layanan diskon (promo), maka proses
              refund dilakukan dimana pengguna akan mendapatkan refund sesuai
              dana transaksi setelah dikurangi dana pemakaian.
            </li>
            <br />
            <li>
              Max More Studio tidak akan memberikan refund bagi pengguna yang
              melanggar Terms of Service.
            </li>
          </ol>
        </div>
        <br />
        <div>
          <strong>Kebijakan Pembatalan</strong>
          <ol>
            <li>
              Anda dapat memutuskan untuk berhenti kapanpun (untuk layanan yang
              berlangganan). Permohonan pembatalan tidak dapat dilakukan melalui
              telepon. Untuk melakukan pembatalan, anda harus menghubungi
              Customer Service yang sudah tersedia di web Max More Studio atau
              mengirimkan ticket perihal pembatalan layanan.
            </li>
            <br />
            <li>
              Pemberitahuan pembatalan harus diterima sedikitnya sepuluh hari
              kerja sebelum tanggal jatuh tempo untuk menghindari biaya penuh
              untuk periode layanan selanjutnya. Gagalnya melakukan pembatalan
              menyebabkan invoice tetap jatuh tempo. Permintaan pembatalan hanya
              bisa didaftarkan jika account tidak memiliki jatuh tempo invoice.
            </li>
            <br />
            <li>
              Anda bertanggung jawab atas penggunaan email konfirmasi dari Max
              More Studio. Jika anda belum menerima email pemberitahuan
              pembatalan, account anda akan tetap aktif dan anda tetap akan
              menerima tagihan.
            </li>
            <br />
            <li>
              Max More Studio berhak membatalkan account setiap waktu jika di
              temukan pelanggaran pada account pengguna.
            </li>
            <br />
            <li>Bentuk formulir pembatalan yang lain tidak kami terima.</li>
          </ol>
        </div>
        <br />
        <div>
          <div>
            <strong>Kebijakan Jaminan</strong> - Max More Studio menjamin 100%
            keamanan data Anda dan Akun Anda. Max More Studio juga akan menjamin
            100% keamanan data dan akun Media Sosial yang Anda gunakan ketika
            memesan layanan dari Max More Studio. Pihak Max More Studio tidak
            akan menyalahgunakan setiap data yang Anda masukkan.
          </div>
          <br />
          <div>
            <strong>Kebijakan Ganti Rugi</strong> - Anda setuju menggunakan
            layanan dan fasilitas Max More Studio dengan segala kemungkinan
            resiko yang timbul, menjadi tanggungan anda. Max More Studio tidak
            akan bertanggung jawab atas kerugian, kehilangan data termasuk
            kerusakan yang timbul akibat kesalahan Anda dalam memanfaatkan
            layanan Max More Studio. Max More Studio dibebaskan dari tuntutan
            pihak ketiga atas terjadinya kerugian yang timbul bagi pihak ketiga.
          </div>
          <br />
        </div>
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" sx={{ variant: "section.feedback" }}>
      <Container>
        <SectionHeader
          title="Kebijakan Layanan"
          description="Peraturan Max More Studio dibuat untuk kenyamanan yang berlaku untuk semua pelanggan. Dengan menggunakan layanan dari Max More Studio berarti Anda telah setuju untuk aturan ini."
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Apa kamu punya pertanyaan lanjutan mengenai Kebijakan Layanan
              kami?
            </Heading>
            <Text as="p">
              Jika pertanyaan kamu belum terjawab disini, silahkan hubungi team
              Max More Studio.
            </Text>
            <Link
              sx={styles.askButton}
              target="_blank"
              href="https://wa.me/6285156935824?text=Saya%20mau%20bertanya%20lebih%20lanjut%20mengenai%20Kebijakan%20Layanan"
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
