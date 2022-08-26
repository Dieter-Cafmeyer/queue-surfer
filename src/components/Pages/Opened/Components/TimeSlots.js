import TimeSlot from './TimeSlot';

const TimeSlots = ({timeslots}) => {
   let slots = [];

   timeslots.forEach(element => {
      element.items.forEach(slot => {
         let start = new Date(slot.openingTime);
         let end = new Date(slot.closingTime);
         slot.start = `${(start.getHours()<10?'0':'') + start.getHours()}:${(start.getMinutes()<10?'0':'') + start.getMinutes()}`;
         slot.end = `${(end.getHours()<10?'0':'') + end.getHours()}:${(end.getMinutes()<10?'0':'') + end.getMinutes()}`
      });
   });

  return (
    <>
      {timeslots.map((timeslot) => (
         <TimeSlot key={timeslot.date} timeslot={timeslot} />
      ))}
    </>
  )
}

export default TimeSlots
