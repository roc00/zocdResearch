import React from 'react'
// import Link from 'gatsby-link'
import '../layouts/layout.css'
import '../layouts/scrollingNav'
import Nav from '../components/header'
import Button from '../components/button'
import { ListA, ListB, ListC, ListD, ListE } from '../components/Item'
import {
  SideBarA,
  SideBarB,
  SideBarC,
  SideBarD,
  SideBarE,
} from '../components/sideBar'
import { aim, valsA, valsB, valsC, valsD, valsE } from '../layouts/submit'

class IndexPage extends React.Component {
  render() {
    const actived = {
      color: '#525866',
      fontWeight: 'bold',
    }

    return (
      <div>
        <Nav activedA={actived} progress={{ width: '80px' }} />
        <div className="main">
          <div className="main-content">
            <ListA />
            {/* <Link > */}
            <Button buttonName="提交，进入下一个模块" uniqueKey={valsA} />
            {/* </Link> */}
          </div>
          <div className="a" />
          <div className="main-sidebar">
            <SideBarA />
          </div>
          <div className="side-blank" />
        </div>
      </div>
    )
  }
}

export default IndexPage
//test
