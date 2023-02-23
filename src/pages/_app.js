import '../styles/globals.css';
import React from "react";
import Layout from '../common/components/Layout';

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  );
};

export default App;
