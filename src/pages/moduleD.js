import React from "react";
import Link from 'gatsby-link';
import "../layouts/layout.css";
import Nav from "../components/header";
import Button from "../components/button";
import {ListA, ListB, ListC, ListD, ListE} from "../components/Item";
import {SideBarA, SideBarB, SideBarC, SideBarD, SideBarE} from "../components/sideBar";
import {valsA, valsB, valsC, valsD, valsE} from "../layouts/submit";


class IndexPage extends React.Component {
  render() {
    const actived = {
      color: "#525866",
      fontWeight: "bold"
    };

    return (
      <div>
        <Nav activedD={actived} progress={{ width: '320px' }} />
        <div className="main">
          <div className="main-content">
            <ListD />
            <Link to="/moduleE/">
              <Button buttonName="提交，进入下一个模块" uniqueKey={valsD} />
            </Link>
          </div>
          <div className="main-sidebar">
            <SideBarD />
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
