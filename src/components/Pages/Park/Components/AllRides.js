import Rides from './Rides';

const AllRides = ({ operating, down, closed }) => {

   function filterRides() {
      let q = document.getElementsByClassName("search")[0].value;
      let rideItems = document.getElementsByClassName("singleRide");
      let rideStates = document.getElementsByClassName("attractions");

      // Hide ride
      for (let index = 0; index < rideItems.length; ++index) {
         const element = rideItems[index];
         element.style.display = "flex";
         let name = element.dataset.name.toLowerCase();
         let result = name.includes(q.toLowerCase());
         if (!result) {
            element.style.display = "none";
         }
      }

      // Hide category
      for (let index = 0; index < rideStates.length; ++index) {
         const state = rideStates[index];
         state.style.display = "flex";
         let name = state.dataset.name.toLowerCase();
         let result = name.includes(q.toLowerCase());
         if (!result) {
            state.style.display = "none";
         }
      }

   }

   return (
      <>
         <br />
         <div className="searchHolder">
            <input className="search" placeholder="Search a ride" type="text" onChange={() => filterRides()} />
            <i className="fa-duotone fa-magnifying-glass"></i>
         </div>
         {operating.length > 0 ? <Rides rides={operating} text='Operating rides' /> : ''}
         {down.length > 0 ? <Rides rides={down} text='Broken down' /> : ''}
         {closed.length > 0 ? <Rides rides={closed} text='Closed rides' /> : ''}
      </>
   )
}

export default AllRides
