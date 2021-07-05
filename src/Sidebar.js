import React from 'react'
import "./Sidebar.css"
import SidebarOptions from './SidebarOptions'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarOptions
           Icon={HomeIcon}
           name="Home"
            />
              <SidebarOptions
           Icon={ExploreIcon}
           name="Explore"
            />
              <SidebarOptions
           Icon={SubscriptionsIcon}
           name="Subcriber"
            />
            <hr/>
            <SidebarOptions
           Icon={VideoCallIcon}
           name="Videos"
            />
              <SidebarOptions
           Icon={VideoLibraryIcon}
           name="Libary"
            />
              <SidebarOptions
           Icon={HistoryIcon}
           name="History"
            />
              <SidebarOptions
           Icon={WatchLaterIcon}
           name="Watch Later"
            />
              <SidebarOptions
           Icon={ThumbUpAltIcon}
           name="Like"
            />
              <SidebarOptions
           Icon={ExpandMoreIcon}
           name="Show more"
            />
        </div>
    )
}

export default Sidebar
