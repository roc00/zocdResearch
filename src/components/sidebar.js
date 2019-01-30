import React from 'react'
import { dataA, amountA } from '../layouts/data'
import { dataB, amountB } from '../layouts/data'
import { dataC, amountC } from '../layouts/data'
import { dataD, amountD } from '../layouts/data'
import { dataE, amountE } from '../layouts/data'
import '../layouts/form.css'

export class SideBarA extends React.Component {
  render() {
    const catalog = dataA.map(list => {
      return (
        <a href={'#' + 'section-' + Number(dataA.indexOf(list) + 1)} target="_parent" className="sideNav">
          <li className="sidebar-item">
            {/* {dataA.indexOf(list) + 1}.  */}
            {list.title}
          </li>
        </a>
      )
    })

    return (
      <div className="sidebar">
        <p className="sidebar-indicator">
          基础架构： <span id="current-amount">0</span>/{amountA}
        </p>
        <ul className="sidebar-list">{catalog}</ul>
      </div>
    )
  }
}

export class SideBarB extends React.Component {
  render() {
    const catalog = dataB.map(list => {
      return (
        <a href={'#' + 'section-' + Number(dataB.indexOf(list) + 1)}>
          <li className="sidebar-item">
            {dataB.indexOf(list) + 1}. {list.title}
          </li>
        </a>
      )
    })

    return (
      <div className="sidebar">
        <p className="sidebar-indicator">
          基础架构： <span id="current-amount">0</span>/{amountB}
        </p>
        <ul className="sidebar-list">{catalog}</ul>
      </div>
    )
  }
}

export class SideBarC extends React.Component {
  render() {
    const catalog = dataC.map(list => {
      return (
        <a href={'#' + 'section-' + Number(dataC.indexOf(list) + 1)}>
          <li className="sidebar-item">
            {dataC.indexOf(list) + 1}. {list.title}
          </li>
        </a>
      )
    })

    return (
      <div className="sidebar">
        <p className="sidebar-indicator">
          基础架构： <span id="current-amount">0</span>/{amountC}
        </p>
        <ul className="sidebar-list">{catalog}</ul>
      </div>
    )
  }
}

export class SideBarD extends React.Component {
  render() {
    const catalog = dataD.map(list => {
      return (
        <a href={'#' + 'section-' + Number(dataD.indexOf(list) + 1)}>
          <li className="sidebar-item">
            {dataD.indexOf(list) + 1}. {list.title}
          </li>
        </a>
      )
    })

    return (
      <div className="sidebar">
        <p className="sidebar-indicator">
          基础架构： <span id="current-amount">0</span>/{amountD}
        </p>
        <ul className="sidebar-list">{catalog}</ul>
      </div>
    )
  }
}

export class SideBarE extends React.Component {
  render() {
    const catalog = dataE.map(list => {
      return (
        <a href={'#' + 'section-' + Number(dataE.indexOf(list) + 1)}>
          <li className="sidebar-item">
            {dataE.indexOf(list) + 1}. {list.title}
          </li>
        </a>
      )
    })

    return (
      <div className="sidebar">
        <p className="sidebar-indicator">
          基础架构： <span id="current-amount">0</span>/{amountE}
        </p>
        <ul className="sidebar-list">{catalog}</ul>
      </div>
    )
  }
}

export default SideBarA
