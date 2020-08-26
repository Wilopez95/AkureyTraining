import React, { useState } from 'react';


export const Tittle = props => (
  <div>
    <div className="title__conteiner">
      <h1 className="title">
        {props.title} {props.score}
      </h1>
    </div>
  </div>
)