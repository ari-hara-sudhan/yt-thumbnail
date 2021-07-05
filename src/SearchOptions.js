import React from 'react'
import "./SearchOptions.css"

function SearchOptions({src,profile,title,channel,timestamp,views}) {
    return (
        <div className="searchoptions">
            <div className="searchoptions__logo">
                <img className="searchoptions__image" src={src} alt={channel}/>
            </div>
            <div className='searchoptions__info'>
                <h3>{channel}</h3>
                <h4>{views}.</h4>
                <p>{title}</p>
                <p>{views} views.{timestamp}</p>
                

            </div>
            
        </div>
    )
}

export default SearchOptions
