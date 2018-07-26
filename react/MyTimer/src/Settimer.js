import React, { Component } from 'react';

class MyTimer extends Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
      console.log("un update a eu lieu");
      
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          Seconds: {this.state.seconds}
        </div>
      );
    }
  }

export default MyTimer;
