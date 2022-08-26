import Slot from "./Slot";

const TimeSlot = ({ timeslot }) => {
   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   let date = new Date(timeslot.date);
   let printDate = `${date.getDate()} ${months[date.getMonth()]} `;

   return (
      <article>
         <h3>{printDate}</h3>

         {timeslot.items.map((slot) => (
            <Slot key={`${timeslot.data}+${slot.start}`} slot={slot} />
         ))}
      </article>
   )
}

export default TimeSlot
