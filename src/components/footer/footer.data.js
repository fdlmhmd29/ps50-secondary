import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaDribbble } from "react-icons/fa";

export default [
  // {
  //   header: "Tentang Kami",
  //   items: [
  //     {
  //       path: "/",
  //       label: "Pusat Bantuan",
  //     },
  //     {
  //       path: "/",
  //       label: "Bantuan Pengguna",
  //     },
  //     {
  //       path: "/",
  //       label: "Tentang Kami",
  //     },
  //     {
  //       path: "/",
  //       label: "Copyright",
  //     },
  //   ],
  // },
  // {
  //   header: "Informasi Kami",
  //   items: [
  //     {
  //       path: "/",
  //       label: "Kebijakan Pengembalian ",
  //     },
  //     {
  //       path: "/",
  //       label: "Kebijakan Privasi",
  //     },
  //     {
  //       path: "/",
  //       label: "Syarat & Ketentuan",
  //     },
  //     {
  //       path: "/",
  //       label: "Peta Halaman",
  //     },
  //   ],
  // },
  {
    header: "Layanan Kami",
    items: [
      {
        path: "/layanan/sosial-media-manajemen",
        label: "Sosial Media Manajemen",
      },
      {
        path: "/",
        label: "",
      },
    ],
  },
  {
    header: "Sosial Media Max More",
    items: [
      {
        path: "https://www.facebook.com/maxmore.studio",
        label: "Facebook",
        name: "facebook",
        icon: <FaFacebook />,
      },
      {
        path: "https://www.instagram.com/maxmore.studio",
        label: "Instagram",
        name: "instagram",
        icon: <FaInstagram />,
      },
    ],
  },
];
