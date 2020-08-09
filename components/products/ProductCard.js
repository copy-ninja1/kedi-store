import { Card } from "antd";
import { Component } from "react";

const { Meta } = Card;
class productCard extends Component {
  render() {
    return (
      <Card
        hoverable
        style={{ width: "100%" }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title={this.props.title} description={this.props.description} />
      </Card>
    );
  }
}
export default productCard;
