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
          text: 'What is box model?',
          choices: [
            {
              id: 'a',
              text: 'A box with a sexy model in it...'
            },
            {
              id: 'b',
              text: 'A model of a cardboard box...'
            },
            {
              id: 'c',
              text: 'In a document, each element is represented as a rectangular box.'
            },
            {
              id: 'd',
              text: 'The box my cat sleeps in...'
            }
          ],
          correct: 'c'
        },
        {
          id:2,
          text: 'What is DOM?',
          choices: [
            {
              id: 'a',
              text: 'Dutch for "Stupid"'
            },
            {
              id: 'b',
              text: 'Domain Object Momma'
            },
            {
              id: 'c',
              text: 'Document Object Model'
            }
          ],
          correct: 'c'
        },
        {
          id:3,
          text: 'How do you add a class in jQuery?',
          choices: [
            {
              id: 'a',
              text: '$.addClass('class_name')'
            },
            {
              id: 'b',
              text: '$.appendTo('selector')'
            },

            {
              id: 'c',
              text: '$.css('property', 'value');
'
            }
          ],
          correct: 'a'
        },
        {
          id:4,
          text: 'What command is used to update node packages?',
          choices: [
            {
              id: 'a',
              text: 'npm install'
            },
            {
              id: 'b',
              text: 'npm update'
            },
            {
              id: 'c',
              text: 'npm make update'
            }
          ],
          correct: 'b'
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
