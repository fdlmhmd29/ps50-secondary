import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";

export default [
  {
    header: "Tentang Kami",
    items: [
      {
        path: "/",
        label: "Pusat Bantuan",
      },
      {
        path: "/",
        label: "Bantuan Pengguna",
      },
      {
        path: "/",
        label: "Tentang Kami",
      },
      {
        path: "/",
        label: "Copyright",
      },
    ],
  },
  {
    header: "Informasi Kami",
    items: [
      {
        path: "/",
        label: "Kebijakan Pengembalian ",
      },
      {
        path: "/",
        label: "Kebijakan Privasi",
      },
      {
        path: "/",
        label: "Syarat & Ketentuan",
      },
      {
        path: "/",
        label: "Peta Halaman",
      },
    ],
  },
  {
    header: "Akun Saya",
    items: [
      {
        path: "/",
        label: "Layanan Kami",
      },
      {
        path: "/",
        label: "Social Media Manajemen ",
      },
    ],
  },
  {
    header: "Kontak",
    items: [
      {
        path: "/",
        label: "Facebook",
        name: "facebook",
        icon: <FaFacebook />,
      },
      {
        path: "/",
        label: "Twitter",
        name: "twitter",
        icon: <FaTwitter />,
      },
      {
        path: "https://github.com/fdlmhmd29",
        label: "Github",
        name: "github",
        icon: <FaGithub />,
      },
      {
        path: "/",
        label: "Dribbble",
        name: "dribbble",
        icon: <FaDribbble />,
      },
    ],
  },
];
