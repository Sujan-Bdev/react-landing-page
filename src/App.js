import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";

import RouterApp from "router/index";
import TopHeader from "layout/TopHeader";
import Footer from "layout/Footer";
import LoadingSpinner from 'components/LoadingSpinner';

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner/>}>
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
