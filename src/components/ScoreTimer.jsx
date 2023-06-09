import { useState } from "react"
import css from "./ScoreTimer.module.css"
import {
  pauseTimer,
  resetTimer,
  startCountdown,
  stopTimer,
} from "../utils/timerFunctions"
import { Link } from "react-router-dom"

export default function ScoreTimer({
  timer,
  startValue,
  totalScore,
  handleCurrentScore,
  questionNumber,
  gameStart,
  handleRestart,
  handleGameStart,
}) {
  let timerData = ["days", "hours", "minutes", "seconds", "secondTenths"]

  return (
    <section className={css.scoreTimeBoard}>
      <section className={css.navButton}>
        {gameStart ? (
          <button onClick={handleRestart}>Restart</button>
        ) : (
          <button onClick={handleGameStart}>Start</button>
        )}
        <button>
          <Link to="/">Exit</Link>
        </button>
      </section>

      <section className={css.timerWrapper}>
        <div className={css.timerDisplay}>
          {timer.getTimeValues().toString(["minutes", "seconds"])}
        </div>
        <div className={css.scoreWrapper}>
          <p>Score: {totalScore}</p>
          <p>Question {questionNumber}/10</p>
          <div
            //   type="text"
            value={Number(
              timer.getTimeValues().toString(timerData).split(":").join("")
            )}
            onChange={handleCurrentScore}
          >
            {}
          </div>
        </div>
        {/* <div className={css.buttonWrapper}>
        <button
          disabled
          onClick={() => {
            startCountdown(timer, startValue)
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            pauseTimer(timer)
          }}
        >
          Pause
        </button>
        <button
          onClick={() => {
            stopTimer(timer)
          }}
        >
          Stop
        </button>
        <button
          onClick={() => {
            resetTimer(timer)
          }}
        >
          Reset
        </button>
      </div> */}
      </section>
    </section>
  )
}
