import React, { useState } from "react";
import { useSocket } from "use-socketio";
import './Scoreboard.css'
import LinearProgress from "@material-ui/core/LinearProgress";


export const Scoreboard = () => {
  const [players, setPlayers] = useState([]);
  const [winningScore, setWinningScore] = useState(0);

  useSocket("draw_board", msg => {
    setPlayers(msg.players);
    setWinningScore(msg.winning_score);
  });

  const normalise = value => (value - 0) * 100 / ({winningScore} - 0);

  const renderProgressBars = () => {
    return players.length ? (
      <>
        {Object.entries(players).map( ([score, player]) => (
          <div className='scoreboard-player row'>
            <span className='scoreboard-player-name col-2'>{player}</span>
            <LinearProgress
              className='scoreboard-player-progress col-9'
              variant="determinate"
              value={score}
              aria-valuemax={winningScore}
            />
            <span className='scoreboard-player-total col-1'>
              {score}
            </span>
          </div>
        ))}
      </>
    ) : (
      <span />
    );
  };

  return (
      <>
        { renderProgressBars() }
      </>
  )

}