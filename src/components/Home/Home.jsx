import React from 'react';
import * as C from './styles';

import  Question  from './Question/Question';
import Emotions from './Emotions/Emotions';
import Time from './Time/Time'
import Phrase from './Phrases/Phrase';
import Message from './Message/Message';


const Home = () => {
  return (
    <main>
      <C.Home>
        <C.Content>
          <h1>They told me  “nothing in the worlds can love you.”
          He was wrong</h1>
          <button>Never Believe</button>
        </C.Content>
      </C.Home>
      <Question/>
      <Emotions/>
      <Time />
      <Phrase />
      <Message/>
    </main>

  )
}

export default Home