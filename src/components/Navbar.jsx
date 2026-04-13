export default function Navbar({ setGameState }) {
  function handleClick() {
    setGameState((prev) => {
      return { ...prev, state: "menu" };
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
