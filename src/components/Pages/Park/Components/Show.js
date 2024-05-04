import ShowTimes from "./ShowTimes"

const Show = ({ show }) => {

   return (
      <article>
         <div className="attraction_content">
            <div style={{ width: '100%' }} className={show.statusClass + " colorCode"}>
               <h2>{show.name}</h2>
               <div className="info">
                  {show.showtimes.map((showTime) => (
                     <ShowTimes key={show.id+showTime.time} showTime={showTime} />
                  ))}
               </div>
            </div>
         </div>
      </article >
   )
}

export default Show
