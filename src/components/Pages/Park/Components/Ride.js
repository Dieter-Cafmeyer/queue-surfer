import { useState } from 'react';
import RideStatus from "./RideStatus";

const Ride = ({ ride }) => {
   const [showDetails, setShowDetails] = useState(false);
   let content;

   if (ride.statusClass === 'DOWN') {
      content = <i className="fad fa-exclamation-triangle"></i>;
   } else if (ride.statusClass === 'CLOSED') {
      content = <i className="fad fa-lock-alt"></i>;
   } else {
      if (typeof ride.queue !== 'undefined' && typeof ride.queue.BOARDING_GROUP !== "undefined") {
         content = <i class="fa-duotone fa-user-group"></i>
      } else if (typeof ride.queue !== 'undefined' && typeof ride.queue.STANDBY !== "undefined") {
         content = <><h3>{ride.queue.STANDBY.waitTime}</h3><p>min</p></>;
      } else {
         content = <><h3>0</h3><p>min</p></>;
      }
   }
   return (
      <article onClick={() => setShowDetails(!showDetails)}>
         <div className="attraction_content">
            <div className={ride.statusClass + " colorCode"}>
               <h2>{ride.name}</h2>
               <h3>
                  {ride.status}
                  
                  <div>
                     {typeof ride.queue != 'undefined' && typeof ride.queue.SINGLE_RIDER != 'undefined' ? <i style={{ fontSize: '18px' }} className="fa-thin fa-person"></i> : ''}
                     {typeof ride.queue != 'undefined' && typeof ride.queue.PAID_RETURN_TIME != 'undefined' ? <i style={{ fontSize: '18px' }} className="fa-thin fa-forward"></i> : ''}
                  </div>
               </h3>

               {showDetails ? <RideStatus ride={ride} showDetails={showDetails} /> : ''}
            </div>
            

            <div className={ride.statusClass + " attraction_times"}>
               {content}
            </div>
         </div>
      </article>
   )
}

export default Ride
