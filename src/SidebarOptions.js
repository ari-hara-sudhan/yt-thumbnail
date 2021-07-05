import React from 'react'
import "./SidebarOptions.css"
import { IconButton } from '@material-ui/core'

function SidebarOptions({Icon,name}) {
    return (
        <div className="sidebaroptions">
            <IconButton>
            <Icon/>
            </IconButton>
         
            <h4 className="sidebaroptions__name">{name}</h4>
            
        </div>
    )
}

export default SidebarOptions
