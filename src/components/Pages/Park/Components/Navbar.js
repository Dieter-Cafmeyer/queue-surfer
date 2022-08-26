import { Link } from 'react-router-dom';

const Navbar = ({ onShowMenu, id }) => {
   return (
      <section className="navigation">
         <Link to={`/park/opened/${id}`}>
         <div style={{ display: 'flex',justifyContent: 'center', alignItems: 'center' }}>
            <i style={{ fontSize: '20px', marginRight: '10px', color: 'white', marginLeft: '15px' }} className="fa-duotone fa-clock"></i>
            <p style={{ color: 'white', fontWeight: '200', fontSize: '16px' }}>Opening times</p>
         </div>
         </Link>

         <i onClick={onShowMenu} className="fal fa-bars"></i>
      </section>
   )
}

export default Navbar
