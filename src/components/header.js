import React from "react";
import "../layouts/form.css";

export class Header extends React.Component {
  render() {
    const actived = {
      color: "#525866",
      fontWeight: "bold"
    };

    return (
      <div className="nav">
        <div className="nav-content">
          <a href="/"   rel="noopener noreferrer">
            <div className="image" />
          </a>
          <div>
            <div className="indicator"><div style={this.props.progress} ></div></div>
            <ul className="module">
              <li style={this.props.activedA} >功能拓展</li>
              <li style={this.props.activedB} >视觉设计</li>
              <li style={this.props.activedC} >交互设计</li>
              <li style={this.props.activedD} >运营策略</li>
              <li style={this.props.activedE} >品牌推广</li>            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
