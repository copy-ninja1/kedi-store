import { Layout } from "antd";
import React from "react";

const { Header, Footer, Content } = Layout;

class Welcome extends React.Component {
  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Content> {this.props.children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
export default Welcome;

