import React from 'react';
import { Layout } from 'antd';
import Header from '../Header';
import Footer from '../Footer';
import ContentArea from '../ContentArea'

const { Content } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: '0 50px', textAlign: "center" }}>
        <ContentArea />
      </Content>
      <Footer />
    </Layout >
  );
}

export default App;
