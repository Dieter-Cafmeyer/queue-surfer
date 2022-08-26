
const RideStatus = ({ ride }) => {
   let returnTime;

   if (typeof ride.queue !== 'undefined' && typeof ride.queue.PAID_RETURN_TIME !== 'undefined' && typeof ride.queue.PAID_RETURN_TIME.returnStart !== 'undefined') {
      let time = new Date(ride.queue.PAID_RETURN_TIME.returnStart);
      returnTime = `${(time.getHours()<10?'0':'') + time.getHours()}:${(time.getMinutes()<10?'0':'') + time.getMinutes()}`;
   }

   return (
      <div className="extras">
         <div>
            {typeof ride.queue != 'undefined' && typeof ride.queue.SINGLE_RIDER != 'undefined' ? <div><h3>Single Rider</h3><h4>{ride.queue.SINGLE_RIDER.waitTime} min</h4></div> : ''}
            {typeof ride.queue != 'undefined' && typeof ride.queue.PAID_RETURN_TIME != 'undefined'
               ?
               <div>
                  <h3>Fastpass</h3>
                  <h4>Price: {ride.queue.PAID_RETURN_TIME.price.amount / 100} {ride.queue.PAID_RETURN_TIME.price.currency}</h4>
                  <h4>Return time: {returnTime}</h4>
                  <h4>Status: {ride.queue.PAID_RETURN_TIME.state}</h4>
               </div>
               : ''}
         </div>
      </div >
   )
}

export default RideStatus
