import React from "react";
import "../layouts/form.css";
import { submit } from "../layouts/submit";

export class Answers extends React.Component {
  render() {
    return (
      <form className="item">
        <label className="answer">
          没有
          <input type="radio" name="point" value="0" onClick={submit} />
          <span className="checkmark" />
        </label>
        <label className="answer">
          仅仅是有
          <input type="radio" name="point" value="5" onClick={submit} />
          <span className="checkmark" />
        </label>
        <label className="answer">
          还不错
          <input type="radio" name="point" value="10" onClick={submit} />
          <span className="checkmark" />
        </label>
        <label className="answer">
          非常好
          <input type="radio" name="point" value="15" onClick={submit} />
          <span className="checkmark" />
        </label>
      </form>
    );
  }
}

export default Answers;
