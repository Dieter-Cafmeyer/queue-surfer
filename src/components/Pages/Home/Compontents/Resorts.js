import Resort from "./Resort";

const Resorts = ({ resorts, onSelectPark }) => {
   const resortsAsc = [...resorts].sort((a, b) =>
      a.name > b.name ? 1 : -1,
   );

   function filterParks() {
      let q = document.getElementsByClassName("search")[0].value;
      let parkItems = document.getElementsByClassName("singlePark");

      for (let index = 0; index < parkItems.length; ++index) {
         const element = parkItems[index];
         element.style.display = "block";
         let name = element.dataset.name.toLowerCase();
         let result = name.includes(q.toLowerCase());
         if (!result) {
            element.style.display = "none";
         }
      }

   }

   return (
      <div>
         <div className="searchHolder">
            <input className="search" placeholder="Search your park" type="text" onChange={() => filterParks()} />
            <i className="fa-duotone fa-magnifying-glass"></i>
         </div>
         {resortsAsc.map((resort) => (
            <Resort key={resort.id} resort={resort} onSelectPark={onSelectPark} />
         ))}
      </div>
   )
}

export default Resorts
