import React from 'react';
import QuestionList from './QuestionList';
import ScoreBox from './ScoreBox';
import Results from './Results';



class Quiz extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      questions: [
        {
          id:1,
          text: 'What is your name?',
          choices: [
            {
              id: 'a',
              text: 'Mikeal'
            },
            {
              id: 'b',
              text: 'Lucy'
            },
            {
              id: 'c',
              text: 'Stevy'
            },
          ],
          correct: 'b'
        },
        {
          id:2,
          text: 'What is your cats name?',
          choices: [
            {
              id: 'a',
              text: 'fleur'
            },
            {
              id: 'b',
              text: 'Lucy'
            },
            {
              id: 'c',
              text: 'Winnie'
            },
          ],
          correct: 'c'
        },
        {
          id:3,
          text: 'What is your friends name?',
          choices: [
            {
              id: 'a',
              text: 'Brad'
            },
            {
              id: 'b',
              text: 'Otis'
            },
            {
              id: 'c',
              text: 'Bond'
            },
          ],
          correct: 'a'
        },
        {
          id:4,
          text: 'What is you favorite day?',
          choices: [
            {
              id: 'a',
              text: 'Monday'
            },
            {
              id: 'b',
              text: 'Tuesday'
            },
            {
              id: 'c',
              text: 'Wensday'
            },
          ],
          correct: 'a'
        },
      ],
      score: 0,
      current:1
    }

  }
  setScore(score){
    this.setState({
      score
    });
  }

  setCurrent(current){
    this.setState({
      current
    });
  }
  render(){
    if (this.state.current > this.state.questions.length){
      var scorebox = '';
      var results = <Results {...this.state} />

    }
    else{
      var scorebox = <ScoreBox {...this.state} />
      var results = '';
    }
    return (
      <div>
        

            {scorebox}
          <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
          {results}


    </div>
    );
  }
}

export default Quiz;
