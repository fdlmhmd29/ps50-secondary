import React from "react";
import "assets/swiper/swiper-bundle.min.css";
import { StickyProvider } from "../../contexts/app/app.provider";
import SEO from "../../components/seo";
import Layout from "../../components/alternative-layout/layout-second";
import Privacy from "../../sections/privacy";
import MessengerCustomerChat from "react-messenger-customer-chat";

// Load other package css file
import "rc-drawer/assets/index.css";

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout>
        <MessengerCustomerChat
          pageId="108480218255046"
          appId="592558242094391"
        />
        <SEO title="Kebijakan Privasi" />
        <Privacy />
      </Layout>
    </StickyProvider>
  );
}
