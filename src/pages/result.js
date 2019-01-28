import React from "react";
import "../layouts/layout.css";
// import { moduleA, moduleB, moduleC, moduleD, moduleE } from "../layouts/submit";

class IndexPage extends React.Component {
  render() {
    // const lengthA = .length;

    const A = Number(localStorage.getItem("moduleA"));
    const B = Number(localStorage.getItem("moduleB"));
    const C = Number(localStorage.getItem("moduleC"));
    const D = Number(localStorage.getItem("moduleD"));
    const E = Number(localStorage.getItem("moduleE"));
    const total = A + B + C + D + E;

    const rateA = (A / 1770) * 100;
    const rateB = (B / 375) * 100;
    const rateC = (C / 975) * 100;
    const rateD = (D / 165) * 100;
    const rateE = (E / 120) * 100;
    const rateTotal = (total / 3405) * 100;

    let level = "";

    switch (true) {
      case total > 0 && total <= 681:
        level = "工具";
        break;
      case total > 681 && total <= 1362:
        level = "助手";
        break;
      case total > 1362 && total <= 2043:
        level = "伙伴";
        break;
      case total > 2043 && total <= 2724:
        level = "品牌";
        break;
      case total > 2724 && total <= 3405:
        level = "情感";
        break;
    }
    return (
      <div className="result">
        <h1>
          APP总分为：{total}, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;占总分数的：
          {rateTotal.toFixed(0)}%
        </h1>
        <br />
        <br />
        <h3>
          功能拓展的分数为：{A},
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;占总分数的：{rateA.toFixed(0)}%
        </h3>
        <h3>
          视觉设计的分数为：{B},
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;占总分数的：{rateB.toFixed(0)}%
        </h3>
        <h3>
          交互设计的分数为：{C},
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;占总分数的：{rateC.toFixed(0)}%
        </h3>
        <h3>
          运营策略的分数为：{D},
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;占总分数的：{rateD.toFixed(0)}%
        </h3>
        <h3>
          品牌推广的分数为：{E},
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;占总分数的：{rateE.toFixed(0)}%
        </h3>
        <br />
        <h2>APP所处的等级为：{level}</h2>
        <br />
        <br />
        <p>下一个版本将增加其他数据维度，并加入图形化展示</p>
      </div>
    );
  }
}

export default IndexPage;
