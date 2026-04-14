import BackArrow from "../assets/icons/back-arrow.svg";

export default function Instructions({ gameState, setGameState }) {
  function handleClick() {
    setGameState((prev) => {
      return { ...prev, state: gameState.prevState };
    });
  }

  return (
    <div className="instructions">
      <div className="instructions__heading">
        <button onClick={handleClick} className="instructions__heading-arrow">
          <img src={BackArrow} alt="Back arrow" />
        </button>
        <h2>Instructions</h2>
        <div></div>
      </div>
      <div className="instructions__content">
        <h3>Game</h3>
        <ul>
          <li>Click "Start Game" to start playing and start the timer</li>
          <li>Click a card to select that driver</li>
          <li>After you select a driver, the cards will shuffle</li>
          <li>Each driver can only be selected once</li>
          <li>
            Your goal is to select each driver exactly once in the fastest time
            possible
          </li>
          <li>If you select any driver twice, the game will end</li>
        </ul>
        <h3>General</h3>
        <ul>
          <li>
            If you are in a game and want to start over, just click "Memory
            Card" to go back to the menu
          </li>
        </ul>
      </div>
    </div>
  );
}
