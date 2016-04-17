import React from 'react';
import { Link } from 'react-router';

class Results extends React.Component{

  render(){

    var percent = (this.props.score / this.props.questions.length * 100);
      if(percent > 80){
        var message = 'Awsome Job!👏'
    } else if(percent < 80 && percent > 40){
        var message = 'You did ok!😏'
    } else{
      var message = "You don't know 😱"
    }
    return (
      <div className="well">
        <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
        <h1>{percent}% - {message}</h1>
        <hr />
        <a href={"/"} className="btn btn-primary">Try Again?</a>
      </div>
    )
  }
}
export default Results;
