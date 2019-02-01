import React from 'react'
// import Link from 'gatsby-link'
import '../layouts/layout.css'
import '../layouts/scrollingNav.js'
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
        <Nav activedE={actived} progress={{ width: '400px' }} />
        <div className="main">
          <div className="main-content">
            <ListE />
            {/* <a href="/result"> */}
              <Button buttonName="完成，查看结果" uniqueKey={valsE} />
            {/* </a> */}
          </div>
          <div className="a" />
          <div className="main-sidebar">
            <SideBarE />
          </div>
          <div className="side-blank" />
        </div>
      </div>
    );
  }
}

export default IndexPage;
