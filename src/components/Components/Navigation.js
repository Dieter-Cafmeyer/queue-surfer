import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';

import NavigationResort from './NavigationResort';
import logo from '../../assets/images/logo.svg';

const Navigation = ({showMenu, closeButton}) => {
   const [cookies, setCookie] = useCookies(['parks']);

   const removePark = (e, id) => {
      let parks = [];
      var inoneyear = new Date();
      inoneyear.setDate(inoneyear.getDate()+365);

      if (cookies.parks.filter(e => e.id === id).length > 0) {
            parks = cookies.parks;
            parks.splice(cookies.parks.findIndex(e => e.id === id),1);
      }

      setCookie('parks', parks, {
         maxAge: inoneyear
      });
   }
   
   
   return (
      <section className={showMenu ? 'active navbar' : 'navbar'}>
         <div className="navbar_top">
            <img src={logo} alt="" />
            
            <i onClick={closeButton} className="fal fa-times"></i>
         </div>
         <h2>Your favourite theme parks:</h2>

         {cookies.parks.map((park) => (
            <NavigationResort onClick={closeButton} key={park.id} park={park} removePark={removePark} />
         ))}
         
         <div className="settings">
            <Link to="/edit" onClick={closeButton}><i className="fal fa-plus"></i> Manage theme parks</Link>
         </div>
      </section>
   )
}

export default Navigation
