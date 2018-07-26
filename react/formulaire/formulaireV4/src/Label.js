import React,{Component} from 'react';

class Label extends Component{

  render(){
    return(
      <label
        htmlFor={this.props.htmlForm}>{this.props.labelValue}
      </label>

    )
  }

}

export default Label;
