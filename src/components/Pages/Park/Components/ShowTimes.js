const ShowTimes = ({showTime}) => {
   return (
      <div className={showTime.status}>
         <i className="fa-light fa-clock"></i> &nbsp; {showTime.time}h
      </div>
   )
}

export default ShowTimes
