import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";

import Banner from "sections/banner";
import Pengurus from "sections/pengurus";
import Feature from "sections/feature";
import CallToAction from "sections/call-to-action";
import BoostAgencies from "sections/boost-agencies";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="GP GPIB Bethania Jakarta" />
          <Banner />
          <Pengurus />
          {/* <BoostAgencies /> */}
          {/* <VideoOne /> */}
          {/* <Testimonials /> */}
          {/* <CustomerSupport /> */}
          <Feature />
          <CallToAction />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
