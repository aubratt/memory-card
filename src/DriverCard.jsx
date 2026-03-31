export default function DriverCard({ firstName, lastName, headshotUrl }) {
  return (
    <div className="driver-card">
      <img src={headshotUrl} alt={`${firstName} ${lastName}`} />
      <p className="driver-card__name">{firstName}</p>
    </div>
  )
}