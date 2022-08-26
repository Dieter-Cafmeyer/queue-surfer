const ShowTimes = ({showTime}) => {
   return (
      <div className={showTime.status}>
         {showTime.time}
      </div>
   )
}

export default ShowTimes
