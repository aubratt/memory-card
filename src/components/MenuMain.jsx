export default function MenuMain({ handleStartClick, handleGameLogClick }) {
  return (
    <div className="menu__button-list">
      <button
        onClick={handleStartClick}
        className="menu__button menu__start-button">
        Start Game
      </button>
      <button onClick={handleGameLogClick} className="menu__button">
        Game Log
      </button>
      <button className="menu__button">Settings</button>
    </div>
  );
}
