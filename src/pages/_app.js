import '../styles/globals.css';
import React from "react";
import Layout from '../common/components/Layout';
import store from '../store';
import { Provider } from 'react-redux'

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  );
};

export default App;
