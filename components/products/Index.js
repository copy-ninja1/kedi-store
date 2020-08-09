import { Row, Col, Divider } from "antd";
import { Component } from "react";
import ProductCard from "./ProductCard";
import Dialog from "./ProductDialog";
import products from "../../products";

class productSection extends Component {
  state = {
    ismodalOpen: false,
    currentProduct: {},
  };
  openModal(product) {
    this.showModal()
    console.log(product);
    this.setState({
      currentProduct: product,
    });
  }
  showModal = () => {
    console.log("open");
    this.setState({
      ismodalOpen: true,
    });
  };
  render() {
    return (
      <div>
        <Row justify="center" gutter={[16, 16]}>
          {products.map((product, index) => {
            return (
              <Col
                onClick={() => this.openModal(product)}
                xs={24}
                sm={12}
                md={5}
                key={index}
              >
                <ProductCard
                  title={product.title}
                  description={product.shortDescription}
                ></ProductCard>
              </Col>
            );
          })}
        </Row>
        <Dialog open={this.state.ismodalOpen}></Dialog>
      </div>
    );
  }
}
export default productSection;
