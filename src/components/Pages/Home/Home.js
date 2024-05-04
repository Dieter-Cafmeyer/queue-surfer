import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import Resorts from './Compontents/Resorts';
import { Link } from 'react-router-dom'

const Home = () => {
   const [resorts, setResorts] = useState({});
   const [cookies, setCookie] = useCookies(['parks']);
   
   useEffect(() => {
      const getResorts = async () => {
         const data = await getAllResorts();
         setResorts(data.destinations);
      }
      getResorts();
   }, []);

   const getAllResorts = async () => {
      const response = await fetch('https://api.themeparks.wiki/v1/destinations')
      const data = await response.json();
      return data;
   }

   const setSelectedPark = (e, id, name, resortName) => {
      let parks = [];
      var inoneyear = new Date();
      inoneyear.setDate(inoneyear.getDate()+365);

      if(typeof cookies.parks !== 'undefined') {
         if (cookies.parks.filter(e => e.id === id).length > 0) {
            parks = cookies.parks;
            parks.splice(cookies.parks.findIndex(e => e.id === id),1);
         } else {
            let park = {
               id: id,
               name: name,
               resortName: resortName
            }
            parks = cookies.parks;
            parks.push(park);
         }
      } else {
         let park = {
            id: id,
            name: name,
            resortName: resortName
         }
         parks.push(park);
      }

      parks.sort((a, b) => {
         if (a.resortName < b.resortName) {
           return -1;
         }
         if (a.resortName > b.resortName) {
           return 1;
         }
         return 0;
      });

      
      setCookie('parks', parks, {
         maxAge: inoneyear
      });
   }

   return (
      <>
         <section className="page_holder wow bounceIn">
            <section className="resorts_holder">
               <h1 style={{ fontSize: "25px", marginBottom: '10px' }}>Select your favourite parks</h1>
               {resorts.length > 0 ? <Resorts resorts={resorts} onSelectPark={setSelectedPark} /> : 'No resorts to show'}
            </section>
         </section>

         {typeof cookies.parks !== 'undefined' && cookies.parks.length > 0 ? <><Link to={`/park/${cookies.parks[0].id}`} className="gotoNext"> <i className="fal fa-check"></i> Done</Link></> : ''}
      </>
   )
}

export default Home
