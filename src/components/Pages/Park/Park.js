import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Switch from './Components/Switch';
import Shows from './Components/Shows';
import AllRides from './Components/AllRides';
import Restaurants from './Components/Restaurants';

const Park = ({ onShowMenu }) => {
   const params = useParams();
   const [tabShown, setTabShown] = useState('attractions');
   const [parkName, setParkName] = useState({});
   const [restaurants, setRestaurants] = useState([]);
   const [operating, setOperating] = useState([]);
   const [down, setDown] = useState([]);
   const [closed, setClosed] = useState([]);
   const [shows, setShows] = useState([]);

   let content;

   useEffect(() => {
      const getWaitTimes = async () => {
         const data = await getLiveWaitTimesFromPark();
         setParkName(data.name);
         document.title = `Queue Surfer - ${data.name} - Live Wait Times - Show Times - Restaurants`;
         orderRides(data);
      }
      getWaitTimes();

      const getRestaurants = async () => {
         const data = await getRestaurantsInPark();
         let rst = [];
         data.children.forEach(element => {
            if (element.entityType === "RESTAURANT") {
               element.key = element.id;
               rst.push(element);
            }
         });

         setRestaurants(rst);
      }
      getRestaurants();

   }, [params.id]);


   const getLiveWaitTimesFromPark = async () => {
      const response = await fetch(`https://api.themeparks.wiki/v1/entity/${params.id}/live`)
      const data = await response.json();
      return data;
   }

   const getRestaurantsInPark = async () => {
      const response = await fetch(`https://api.themeparks.wiki/v1/entity/${params.id}/children`)
      const data = await response.json();
      return data;
   }

   const orderRides = (data) => {
      let opr = [];
      let dwn = [];
      let clsd = [];
      let shw = [];
      data.liveData.forEach(element => {
         if (element.status === "CLOSED") {
            element.statusClass = element.status;
            clsd.push(element);
         } else if (element.status === "DOWN") {
            element.statusClass = element.status;
            dwn.push(element);
         } else if (element.status === "OPERATING") {
            if (element.entityType === "ATTRACTION") {
               if (typeof element.queue !== 'undefined' && typeof element.queue.STANDBY !== 'undefined') {
                  if (element.queue.STANDBY.waitTime <= 20) {
                     element.statusClass = "open";
                  } else if (element.queue.STANDBY.waitTime > 20 && element.queue.STANDBY.waitTime <= 30) {
                     element.statusClass = "openDruk";
                  } else if (element.queue.STANDBY.waitTime > 30 && element.queue.STANDBY.waitTime <= 40) {
                     element.statusClass = "openRedelijkDruk";
                  } else if (element.queue.STANDBY.waitTime > 40 && element.queue.STANDBY.waitTime <= 60) {
                     element.statusClass = "openHeelDruk";
                  } else {
                     element.statusClass = "openSuperDruk";
                  }
               } else {
                  element.statusClass = "open";
                  element.queue = {};
                  element.queue.STANDBY = {};
                  element.queue.STANDBY.waitTime = '0';
               }
               opr.push(element);
            } else if (element.entityType === "SHOW") {
               element.statusClass = "SHOW";
               shw.push(element);
            }
         }
      });

      const numDescending = opr.sort((a, b) => b.queue.STANDBY.waitTime - a.queue.STANDBY.waitTime);
      setOperating(numDescending);
      setDown(dwn);
      setClosed(clsd);
      handleShows(shw);
   }

   const handleShows = (shw) => {
      if (shw.length > 0) {
         shw.forEach(show => {
            show.showtimes.forEach(showtime => {
               let time = new Date(showtime.startTime);
               let date = new Date();

               if (time > date) {
                  showtime.status = "upcomming";
               } else {
                  showtime.status = "passed";
               }

               showtime.time = time.getHours() + ':' + String(time.getMinutes()).padStart(2, '0');
            });
         });
      }
      setShows(shw);
   }

   const showTab = (e, item) => {
      setTabShown(item);

   }

   if (tabShown === "shows") {
      if (shows.length > 0) {
         content = <Shows shows={shows} />
      }
   } else if (tabShown === "attractions") {
      content = <AllRides operating={operating} down={down} closed={closed} />
   } else {
      if (restaurants.length > 0) {
         content = <Restaurants restaurants={restaurants} />;
      }
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

         <section className="waittimes_holder">
            <section className="titleholder">
               <h1>{parkName.length > 0 ? parkName : ''}</h1>
            </section>

            <Switch tabShown={tabShown} onShowTab={showTab} shows={shows} restaurants={restaurants} />

            {content}
         </section>
      </section>
   )
}

export default Park
