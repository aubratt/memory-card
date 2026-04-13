export default function Tag({ icon, text, bgColor }) {
  const width = icon === "../assets/icons/car.png" ? "1.5rem" : "1rem";

  return (
    <div className="menu__recap-tag" style={{ backgroundColor: bgColor }}>
      <img
        className="menu__recap-tag-icon"
        src={icon}
        alt=""
        style={{
          width: text === "Fast" ? "1.375rem" : "1rem",
        }}
      />
      <p style={{ color: "#0f0f0f", fontFamily: "monospace" }}>{text}</p>
    </div>
  );
}
