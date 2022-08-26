import Show from "./Show";

const Shows = ({ shows }) => {
   return (
      <div className="type shows">
         <h2>Shows</h2>
         {shows.map((show) => (
            <Show key={show.id} show={show} />
         ))}
      </div>
   )
}

export default Shows
