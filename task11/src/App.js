import React, { useState } from 'react';
import useSound from 'use-sound';
import './styles/App.css';
import { Tittle } from './components/Tittle';
import {Game} from './components/Game';
import {Score} from './components/Score';
import {Options} from './components/Options';
import hit from './assets/sounds/kick.wav'
import miss from './assets/sounds/hihat.wav'



function App() {

  const [score, setScore] = useState(0);
  const [titleText, settitleText] = useState('Whack-a-mole!')
  const [userName, setUserName] = useState('Anonimous')
  const [playhit] = useSound(hit);
  const [playmiss] = useSound(miss);
  let timeUp = false;
  const [minTime, setminTime] = useState(200)
  const [maxTime, setmaxTime] = useState(1000)
  const [holes, setHoles] = useState([
    { name: 'hole1', up: false },
    { name: 'hole2', up: false },
    { name: 'hole3', up: false },
    { name: 'hole4', up: false },
    { name: 'hole5', up: false },
    { name: 'hole6', up: false },
    { name: 'hole7', up: false },
    { name: 'hole8', up: false },
    { name: 'hole9', up: false }
  ])
  const [scores, setscores] = useState([
    {name:'Juan',score: 20},
    {name:'Pedro',score: 10},
    {name:'Carlos',score: 5}
  ])


  const updateDownMole = hole => (
   setHoles(holes.map(h => (h.name === hole.name ? {...h,up: false}: h ))) 

  )
  const updateUpMole = hole => (
    setHoles(holes.map(h => (h.name === hole.name ? {...h,up: true}: h )))
   )

  const updateScore = () => {
    setScore(score+1)
  } 

  const UpdateUsername = username => {
    setUserName(username)
  }

  /*const AddScore=()=>{
    console.log(userName,score)
  }

  const getLocal=()=>{
    //JSON.parse(localStorage.getItem("scores");
    setscores(localStorage.getItem('myData'));
  }

  const setLocal=()=>{
    localStorage.setItem('myData', JSON.stringify(scores));
  }*/



  const LoadScore=() => (
    <Score scores={scores}/>
  )
    

  const LoadHolesList = () => (
    holes.map(hole => (
      <Game hole={hole} key={hole.name}
       updateDownMole={updateDownMole} 
       updateScore={updateScore} 
       playhit={playhit}
       playmiss={playmiss}
       />
    ))
  )

  const LoadOptions = () => (
    <Options
    play={play} 
    UpdateUsername={UpdateUsername}
    />
  )

  const randonTime = (min,max) => {
    return Math.round(Math.random() *(max-min)+min)
  }

  const levelUp = ()=> {
    if(score>=5){
      setminTime(minTime/2)
      setmaxTime(maxTime/2)
    }
  }

  const randonHole = () => {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    return hole;
  }

  const play =()=> {
    //setLocal();//EXEC 1 TIME 
    timeUp = false;
    setTimeout(() => {playgame(); }, 1500);
    setTimeout(() => timeUp = true, 10000)
  }

  const playgame = () => {
    const time = randonTime(minTime, maxTime);
    const hole = randonHole();
    setTimeout(() => {
      updateUpMole(hole);
      if(!timeUp){
        levelUp();
        playgame();
      }else {
        settitleText('Game Over, Your score:');
        console.log('Finish')
      }
    },time)
  }
  



  return (
    <div>
      <Tittle title={titleText} score={score}/>
      {LoadScore()}
      <div className="game__container">
        {LoadHolesList()}
      </div>
      {LoadOptions()}
    </div>


  );
}

export default App;
