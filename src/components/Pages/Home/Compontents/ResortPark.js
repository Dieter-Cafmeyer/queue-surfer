import { useCookies } from 'react-cookie';

const ResortPark = ({ resortName, park, onClick }) => {
   const [cookies, setCookie] = useCookies(['parks']);
   let active = false;

   if (typeof cookies.parks !== 'undefined' && cookies.parks.filter(e => e.id === park.id).length > 0) {
      active = true;
   }

   return (
      <article onClick={e => onClick(e, park.id, park.name, resortName)}>
         <h3>{park.name}</h3>
         {active ? <i className="fad fa-check-circle" style={{color:'#2ecc71'}}></i> : <i className="fad fa-circle"></i>}
      </article>
   )
}

export default ResortPark
