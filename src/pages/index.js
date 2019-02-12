import React from 'react'
import Link from 'gatsby-link'
import Nav from '../components/header'
import '../layouts/layout.css'
import '../layouts/form.css'
import Button from '../components/button'

class IndexPage extends React.Component {
  render() {
    const actived = {
    }

    return (
      <div>
      <Nav activedA={actived} progress={{ width: '0px' }} />
      <div className="choice-content">
        <h1>证券APP体验评测模型 Beta</h1>
        <p>点击所选模块跳转到对应维度的测试页面，每个模块的结果可独立查看，<br />亦可完成所有模块后查看完整结果；重复测试会覆盖前一个测试结果。</p>
        <div className='choice'>
          <Link to="/moduleA/">
            <div className="feature"></div>
            <p>功能拓展</p>
          </Link>
          <Link to="/moduleB/">
            <div className="interface"></div>
            <p>视觉设计</p>
          </Link>
          <Link to="/moduleC/">
            <div className="interaction"></div>
            <p>交互设计</p>
          </Link>
          <Link to="/moduleD/">
            <div className="operation"></div>
            <p>运营策略</p>
          </Link>
          <Link to="/moduleE/">
            <div className="brand"></div>
            <p>品牌推广</p>
          </Link>
        </div>
        <Link to="/result/">
          <Button buttonName="查看结果" />
        </Link>
      </div>
      </div>
    )
  }
}

export default IndexPage
//test