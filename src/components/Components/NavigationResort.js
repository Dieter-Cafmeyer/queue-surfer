import { Link } from 'react-router-dom'

const NavigationResort = ({ park, onClick }) => {
   let resort;

   if (park.resortName != park.name) {
      resort = <h3>{park.resortName}</h3>;
   }

   return (
      <Link onClick={onClick} to={`/park/${park.id}`}>
         <i className="fa-thin fa-roller-coaster"></i>
         <div>
            {resort}
            <h2>{park.name}</h2>
         </div>
      </Link>
   )
}

export default NavigationResort
