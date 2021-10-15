import './index.css'

const ScoreCard = props => {
  const {score} = props

  //   const resetButton = () => {
  //     reset()
  //   }

  return (
    <div className="background-score-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="cup-size"
      />
      <h1 className="score-heading">Your score</h1>
      <p className="score-heading">{score}</p>
      <div className="button-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
          alt="reset"
          className="reset-image"
        />
        <button type="button" className="play-button">
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default ScoreCard
