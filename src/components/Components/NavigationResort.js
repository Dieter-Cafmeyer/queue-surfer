import { Link } from 'react-router-dom'

const NavigationResort = ({ park, onClick, removePark }) => {
   let resort;

   if (park.resortName != park.name) {
      resort = <h3>{park.resortName}</h3>;
   }

   let image;

   const tryRequire = () => {
      try {
         image = require(`../../assets/images/${park.id}.jpg`);
      } catch (error) {
         image = require(`../../assets/images/catch.jpg`)
      }
   }

   tryRequire();

   return (
      <div className='navigationResort'>
      <Link onClick={onClick} to={`/park/${park.id}`}>
         <div className='navigationResort-image'>
            <img src={image} alt='Park' />
         </div>
         <div>
            {resort}
            <h2>{park.name}</h2>
         </div>
      </Link>
      <i className='fad fa-trash-can' onClick={e => removePark(e, park.id)} ></i>
      </div>
   )
}

export default NavigationResort
