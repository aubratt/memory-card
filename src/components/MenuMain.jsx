export default function MenuMain({
  handleStartClick,
  handleGameLogClick,
  handleInstructionsClick,
}) {
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
      <button onClick={handleInstructionsClick} className="menu__button">
        Instructions
      </button>
    </div>
  );
}
