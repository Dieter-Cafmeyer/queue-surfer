import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Navbar from './Components/Navbar';
import TimeSlots from './Components/TimeSlots';

const Opened = ({ onShowMenu }) => {
   const params = useParams();
   const [parkName, setParkName] = useState({});
   const [timeslots, setTimeSlots] = useState([]);

   useEffect(() => {
      window.scrollTo(0, 0);
      
      const getWaitTimes = async () => {
         const data = await getOpeningTimes();
         setParkName(data.name);
         document.title = `Queue Surfer - ${data.name} - Opening Times`;
         orderTimeslots(data.schedule);
      }
      getWaitTimes();
   }, [params.id]);

   const getOpeningTimes = async () => {
      const response = await fetch(`https://api.themeparks.wiki/v1/entity/${params.id}/schedule`)
      const data = await response.json();
      return data;
   }

   const orderTimeslots = (data) => {
      let slots = [];
      let currentDate = data[0].date;
      let items = [];

      data.forEach(element => {
         if (element.date !== currentDate) {
            let item = {
               date: currentDate,
               items: items
            }
            slots.push(item);
            items = [];
            items.push(element);
         } else {
            items.push(element);
         }

         currentDate = element.date;
      });
      currentDate = "";
      setTimeSlots(slots);
   }
   

   let image;
   const tryRequire = () => {
      try {
         image = require(`../../../assets/images/${params.id}.jpg`);
      } catch (error) {
         image = require(`../../../assets/images/catch.jpg`)
      }
   }
   tryRequire();

   return (
      <section className="page_holder">
         <Navbar onShowMenu={onShowMenu} id={params.id} />

         <img src={image} style={{ width: '100%', marginTop: '55px' }} alt='Park' />

         <section className="openingtimes" >
            <section className="titleholder">
               <h1>{parkName.length > 0 ? parkName : ''}</h1>
            </section>

            <TimeSlots timeslots={timeslots} />
         </section>
      </section >
   )
}

export default Opened
