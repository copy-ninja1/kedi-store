import { Layout } from "antd";
import React from "react";
import AppHeader from "../components/BgHeader";
const { Header, Footer, Content } = Layout;

class Welcome extends React.Component {
  render() {
    return (
      <Layout style={{background:'white'}}>
          <AppHeader></AppHeader>
        <Content > {this.props.children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
export default Welcome;
