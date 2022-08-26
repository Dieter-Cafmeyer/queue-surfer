import Resort from "./Resort";

const Resorts = ({ resorts, onSelectPark }) => {
   const resortsAsc = [...resorts].sort((a, b) =>
      a.name > b.name ? 1 : -1,
   );
   
   return (
      <>
         {resortsAsc.map((resort) => (
            <Resort key={resort.id} resort={resort} onSelectPark={onSelectPark} />
         ))}
      </>
   )
}

export default Resorts
