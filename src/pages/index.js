import React from "react";
import "assets/swiper/swiper-bundle.min.css";
import { StickyProvider } from "../contexts/app/app.provider";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "../sections/banner";
import Feature from "../sections/feature";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Testimonials from "sections/testimonials";
import BusinessProfit from "../sections/business-profit";
import Knowledge from "../sections/knowledge";
import Pricing from "sections/pricing";
import ClientFeedback from "../sections/client-feedback";
import WorkFlow from "../sections/workflow";
import Support from "../sections/support";

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
        <SEO title="Pengelola Sosial Media Bisnis" />
        <Banner />
        <Feature />
        <BusinessProfit />
        <Knowledge />
        <ClientFeedback />
        <Pricing />
        <WorkFlow />
        <Testimonials />
        <Support />
      </Layout>
    </StickyProvider>
  );
}
