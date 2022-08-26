const Switch = ({ onShowTab, tabShown, shows, restaurants }) => {
   return (
      <div className="waittimes_switch">
         <div onClick={e => onShowTab(e, 'attractions')} className={`${tabShown === 'attractions' ? 'active' : ''}`}>Attractions</div>
         {shows.length > 0 ? <div onClick={e => onShowTab(e, 'shows')} className={`${tabShown === 'shows' ? 'active' : ''}`}>Shows</div> : ''}
         {restaurants.length > 0 ? <div onClick={e => onShowTab(e, 'restaurants')} className={`${tabShown === 'restaurants' ? 'active' : ''}`}>Restaurants</div> : ''}
      </div>
   )
}

export default Switch
