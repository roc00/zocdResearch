import React from 'react'
import '../layouts/form.css'
import  {dataA} from '../layouts/data'
import  {dataB} from '../layouts/data'
import  {dataC} from '../layouts/data'
import  {dataD} from '../layouts/data'
import  {dataE} from '../layouts/data'
import Answers from '../components/answers';

export class ListA extends React.Component {
  render() {

    const question = dataA.map(list => {
      return (
        <div>
          <h2 className="question" id={dataA.indexOf(list)}>{dataA.indexOf(list)+1}. {list.title}</h2>
          <p className="example">{list.example}</p>
          <p className="path"><span>{list.parentLocation}</span><span>{list.childLocation}</span></p>
          <Answers/>
        </div>
      )
    });

    return <div>{question}</div>;
  }
}

export class ListB extends React.Component {
  render() {

    const question = dataB.map(list => {
      return (
        <div>
          <h2 className="question" id={dataB.indexOf(list)}>{dataB.indexOf(list)+1}. {list.title}</h2>
          <p className="example">{list.example}</p>
          <p className="path"><span>{list.parentLocation}</span><span>{list.childLocation}</span></p>
          <Answers/>
        </div>
      )
    });

    return <div>{question}</div>;
  }
}

export class ListC extends React.Component {
  render() {

    const question = dataC.map(list => {
      return (
        <div>
          <h2 className="question" id={dataC.indexOf(list)}>{dataC.indexOf(list)+1}. {list.title}</h2>
          <p className="example">{list.example}</p>
          <p className="path"><span>{list.parentLocation}</span><span>{list.childLocation}</span></p>
          <Answers/>
        </div>
      )
    });

    return <div>{question}</div>;
  }
}

export class ListD extends React.Component {
  render() {

    const question = dataD.map(list => {
      return (
        <div>
          <h2 className="question" id={dataD.indexOf(list)}>{dataD.indexOf(list)+1}. {list.title}</h2>
          <p className="example">{list.example}</p>
          <p className="path"><span>{list.parentLocation}</span><span>{list.childLocation}</span></p>
          <Answers/>
        </div>
      )
    });

    return <div>{question}</div>;
  }
}

export class ListE extends React.Component {
  render() {

    const question = dataE.map(list => {
      return (
        <div>
          <h2 className="question" id={dataE.indexOf(list)}>{dataE.indexOf(list)+1}. {list.title}</h2>
          <p className="example">{list.example}</p>
          <p className="path"><span>{list.parentLocation}</span><span>{list.childLocation}</span></p>
          <Answers/>
        </div>
      )
    });

    return <div>{question}</div>;
  }
}

export default ListA