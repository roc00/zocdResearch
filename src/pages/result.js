import React from "react";
import {Radar} from 'react-chartjs-2';
import "../layouts/layout.css";
import "../layouts/resultChart.js";
// import { moduleA, moduleB, moduleC, moduleD, moduleE } from "../layouts/submit";

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ["功能架构", "视觉设计", "交互设计", "运营", "品牌"],
        datasets: [{
        label: "App数据概览",
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        data: [80, 60, 52, 28, 48],
        pointStyle: 'cirle',
        
        }]
      }
    }
  }









  render() {
    // const lengthA = .length;

    const A = Number(typeof localStorage !== 'undefined' && localStorage.getItem("moduleA"));
    const B = Number(typeof localStorage !== 'undefined' && localStorage.getItem("moduleB"));
    const C = Number(typeof localStorage !== 'undefined' && localStorage.getItem("moduleC"));
    const D = Number(typeof localStorage !== 'undefined' && localStorage.getItem("moduleD"));
    const E = Number(typeof localStorage !== 'undefined' && localStorage.getItem("moduleE"));
    const total = A + B + C + D + E;

    const amountA = Number(typeof localStorage !== 'undefined' && localStorage.getItem("AmountModuleA"));
    const amountB = Number(typeof localStorage !== 'undefined' && localStorage.getItem("AmountModuleB"));
    const amountC = Number(typeof localStorage !== 'undefined' && localStorage.getItem("AmountModuleC"));
    const amountD = Number(typeof localStorage !== 'undefined' && localStorage.getItem("AmountModuleD"));
    const amountE = Number(typeof localStorage !== 'undefined' && localStorage.getItem("AmountModuleE"));
    const totalAmount = amountA + amountB + amountC + amountD + amountE;


    const rateA = (A / amountA) * 100;
    const rateB = (B / amountB) * 100;
    const rateC = (C / amountC) * 100;
    const rateD = (D / amountD) * 100;
    const rateE = (E / amountE) * 100;
    const rateTotal = (total / totalAmount) * 100;


    let level = "";

    switch (true) {
      case total > 0 && total <= totalAmount*0.2:
        level = "工具";
        break;
      case total > totalAmount*0.2 && total <= totalAmount*0.4:
        level = "助手";
        break;
      case total > totalAmount*0.4 && total <= totalAmount*0.6:
        level = "伙伴";
        break;
      case total > totalAmount*0.6 && total <= totalAmount*0.8:
        level = "品牌";
        break;
      case total > totalAmount*0.8 && total <= totalAmount:
        level = "情感";
        break;
    }















    return (
      <div className="result">
        <Radar
          data={this.state.chartData}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />      



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
