import React,{Component} from 'react';

class SignUp extends Component{



  constructor(props){
    super(props);
    this.state={
    userinput :''

    };

  }


  handleChange(e) {
   this.setState({
     userinput : e.target.value
   });
 }

  handleSubmit(e){
console.log(this.state);
    alert('A name was ' + this.state.userinput);

  }

  render(){
    return(
      <div>
        <h1>{JSON.stringify(this.state,1,1)}</h1>
      <form onSubmit={this.handleSubmit}>

        <h1>{this.state.userinput}</h1>
      <input onChange={this.handleChange.bind(this)} email={this.state.userinput}
      id={this.props.id}
      type={this.props.type}
      />
      </form>
      </div>



        )
  }

}

export default SignUp;
