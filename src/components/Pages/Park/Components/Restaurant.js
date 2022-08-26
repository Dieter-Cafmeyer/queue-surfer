const Restaurant = ({ restaurant }) => {
   return (
      <article>
         <div className="attraction_content">
            <div style={{ width: '100%', backgroundColor: '#fff' }} className="colorCode">
               <h2 style={{ color: '#6a6a6a', fontWeight: '200' }}>{restaurant.name}</h2>
            </div>
         </div>
      </article>
   )
}

export default Restaurant
