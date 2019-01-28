import React from "react";
import '../layouts/form.css';



export class Button extends React.Component {
    render(){
        return(
            <div className="button-area">
                <div className="commit" type="button" onClick={this.props.uniqueKey} >{this.props.buttonName}</div>
            </div>
        )
    }
}

export default Button