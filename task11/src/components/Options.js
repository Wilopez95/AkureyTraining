import React, { useState } from 'react';



export const Options = props => (
  <div className="options--conteiner">
     <input type="text" className="options--input" name="username" onChange={e=>props.UpdateUsername(e.target.value)} placeholder="username"></input>
    <button className="options--btn" onClick={()=> props.play()}>WHACK!</button>
  </div>
)
