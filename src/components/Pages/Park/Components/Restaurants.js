import Restaurant from "./Restaurant"

const Restaurants = ({ restaurants }) => {
   return (
      <div className="type restaurants">
         <h2>Restaurants</h2>

         {restaurants.map((restaurant) => (
            <Restaurant key={restaurant.id} restaurant={restaurant} />
         ))}
      </div>
   )
}

export default Restaurants
