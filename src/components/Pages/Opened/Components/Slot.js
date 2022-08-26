const Slot = ({ slot }) => {
   let content;

   if(slot.type === 'TICKETED_EVENT') {
      content = <h4>Ticketed Event</h4>;
   } else if(!slot.description) {
      content = <h4>Opening Hours</h4>
   } else {
      content = <h4>{slot.description}</h4>;
   }

   return (
      <div>
         {content}
         <h4>{slot.start} - {slot.end}</h4>
      </div>
   )
}

export default Slot
