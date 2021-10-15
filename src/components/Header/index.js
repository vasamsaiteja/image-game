import './index.css'

const Header = ({score, timer}) => (
  <nav className="nav-container">
    <div className="top-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
        alt="website logo"
        className="logo-image"
      />
      <ul className="score-container">
        <li className="list-container">
          <p className="score-paragraph">
            Score:<span>{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
            alt="timer"
            className="timer-size"
          />
          <p className="seconds-count-paragraph">{timer} sec</p>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
