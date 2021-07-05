import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import "./Video.css"

function Video({src,profile,title,channel,timestamp,views}) {
    return (
        <div className="video">
            <img className="video__image" src={src} alt={channel}/>
            <div className="video__contanier">
                <Avatar src={profile}/>
                <div className='video__info'>
                    <h4>{title}</h4>
                    <h5>{channel}</h5>
                    <p>{views} views . {timestamp}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Video
