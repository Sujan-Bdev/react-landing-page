import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";

import RouterApp from "router/index";
import TopHeader from "layout/TopHeader";
import Footer from "layout/Footer";

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <TopHeader />
          <RouterApp />
          <Footer />
        </Router>
      </Suspense>
    </Layout>
  );
};

export default App;
