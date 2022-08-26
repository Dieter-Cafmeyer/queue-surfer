import Rides from './Rides';

const AllRides = ({ operating, down, closed }) => {
   return (
      <>
         {operating.length > 0 ? <Rides rides={operating} text='Operating rides' /> : ''}
         {down.length > 0 ? <Rides rides={down} text='Broken down' /> : ''}
         {closed.length > 0 ? <Rides rides={closed} text='Closed rides' /> : ''}
      </>
   )
}

export default AllRides
