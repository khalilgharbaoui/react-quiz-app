import React from 'react';
import QuestionList from './QuestionList';


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
          text: 'What is your mothers name?',
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
          correct: 'a'
        },
        {
          id:4,
          text: 'What is your friends name?',
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
          correct: 'a'
        },
      ],
      score: 0,
      current:1
    }

  }

  render(){
    return (



      <div>
      <QuestionList />
    </div>


  );
}
}

export default Quiz;
