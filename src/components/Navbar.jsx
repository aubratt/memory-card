export default function Navbar({ setGameState, setClickedDrivers }) {
  function handleClick() {
    setGameState((prev) => {
      return { ...prev, state: "menu" };
    });
    setClickedDrivers(() => {
      return [];
    });
  }

  return (
    <div className="navbar">
      <button onClick={handleClick}>
        <h1>Memory Card</h1>
      </button>
    </div>
  );
}
