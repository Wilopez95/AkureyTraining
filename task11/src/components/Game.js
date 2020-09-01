import React, {useState} from 'react';

export const Game = props => (
    props.hole.up ?
    <div className="hole up" key={props.hole.name} onClick={()=> props.updateDownMole(props.hole)}>
      <div className="mole" onClick={()=>{props.updateScore(); props.playhit();}}>
      </div>
    </div>
    :
    <div className="hole" key={props.hole.name} onClick={()=> props.playmiss()}>
      <div className="mole" >
      </div>
    </div>  
)
   
