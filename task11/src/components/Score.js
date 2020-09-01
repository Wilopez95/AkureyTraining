import React, { useState } from 'react';


export const Score = props => (
  <div className="score__table" >
    <h3 className="score__table--tittle" >Score history</h3>
    <table id="hScores" className="scores__history">
      <thead>
        <tr>
          <th className="titlescore">Username</th>
          <th className="titlescore">Score</th>
        </tr>
      </thead>
      <tbody>
        {props.scores.map((score,index) => (
          <tr key={index}>
            <td>{score.name}</td>
            <td>{score.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

