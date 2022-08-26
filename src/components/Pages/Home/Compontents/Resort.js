import ResortPark from "./ResortPark"

const Resort = ({ resort, onSelectPark }) => {
  return (
    <>
      <h2>{resort.name}</h2>
      {resort.parks.map((park) => (
        <ResortPark key={park.id} resortName={resort.name} park={park} onClick={onSelectPark} />
      ))}
    </>
  )
}

export default Resort