import { Link } from 'react-router-dom'

const NavigationResort = ({ park, onClick }) => {
   return (
      <Link onClick={onClick} to={`/park/${park.id}`}>
         <i className="fa-thin fa-roller-coaster"></i>
         <div>
            <h3>{park.resortName}</h3>
            <h2>{park.name}</h2>
         </div>
      </Link>
   )
}

export default NavigationResort
