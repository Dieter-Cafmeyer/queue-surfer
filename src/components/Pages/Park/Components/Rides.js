import Ride from "./Ride"
import PropTypes from 'prop-types'

const Rides = ({ rides, text }) => {
   return (
      <div className="type attractions">
         <h2>{text}</h2>
         {rides.map((ride) => (
            <Ride key={ride.id} ride={ride} />
         ))}
      </div>
   )
}

Rides.defaultProps = {
   text: ''
}

Rides.propTypes = {
   text: PropTypes.string
}

export default Rides
