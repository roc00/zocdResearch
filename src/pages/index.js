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
        <Nav activedA={actived} progress={{ width: '80px' }} />
        <div className="main">
          <div className="main-content">
            <ListA />
            <Link to="/moduleB/">
              <Button buttonName="提交，进入下一个模块" uniqueKey={valsA} />
            </Link>
          </div>
          <div className="main-sidebar">
            <SideBarA />
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
//test