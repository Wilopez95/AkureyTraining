import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './styles.css';
import Tittle from './components/Tittle';
import Game from './components/Game';
import Score from './components/Score';
import Options from './components/Options';



function App() {

const [score, setScore] = useState(0);
const [userName, setUserName] = useState('Anonimous')


  return (
    <Router>
      <Tittle/>
      <Route path="/" exact component={Score} />
      <Route path="/" exact component={Options} />
      <Route path="/game" exact component={Game} />
    </Router>
  );
}

export default App;
