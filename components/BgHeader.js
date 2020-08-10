import { Component } from "react";

import bgHeader from "../components/BgHeader.css";
const bgImage = {
  position:'relative',
  backgroundSize: "cover",
  padding: "150px 0px 50px",
  backgroundPosition: "center top",
  backgroundImage: `url(${require("../public/bg-header-image.png")}), linear-gradient(35deg, rgb(147, 249, 185) 0%, rgb(29, 151, 108) 100%)`,
};
class Header extends Component {
  render() {
    return (
      <section style={bgImage} className={bgHeader.section}>
        <div className={bgHeader.slantRect}>
          <svg width="1920" height="500" viewBox="0 0 1920 500">
            <defs>
              <clipPath>
                <rect width="1920" height="500"></rect>
              </clipPath>
            </defs>
            <g>
              <rect
                width="2356"
                height="781"
                transform="translate(-136.868 401.948) rotate(-11)"
                fill="#fff"
              ></rect>
            </g>
          </svg>
        </div>
        <div className={bgHeader.container}>
          <div className={bgHeader.subContainer}>
            <div className={bgHeader.bigTextBox}>
              <h2 className={bgHeader.bigText}>
                Ultimate Platform to monitor your best workflow.
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
