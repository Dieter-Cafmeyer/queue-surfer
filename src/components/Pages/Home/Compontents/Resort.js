import ResortPark from "./ResortPark"

const Resort = ({ resort, onSelectPark }) => {
  return (
    <div data-name={resort.parks.map((park) => (park.name)) + ' ' + resort.name} className="singlePark">
      <h2>{resort.name}</h2>
      {resort.parks.map((park) => (
        <ResortPark key={park.id} resortName={resort.name} park={park} onClick={onSelectPark} />
      ))}
    </div>
  )
}

export default Resort