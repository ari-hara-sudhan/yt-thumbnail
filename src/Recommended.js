import React from 'react'
import "./Recommended.css"
import Video from './Video'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function Recommended() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <div className="recommended">
                <Modal
        open={open}
        onClose={handleClose}
    
      >
          <div style={modalStyle} className={classes.paper}>
          <p>Im the modal</p>
          </div>
       
      </Modal>
            <h2>Recommended</h2>
            <Button onClick={()=>handleOpen()}>CreateThumnail</Button>

            
          <div className="recommended__videos">
          <Video 
            src="https://www.bing.com/th?id=OIP.wI7SgTdiBDdXkhG0DbrAmwHaEl&w=163&h=101&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            profile="https://www.bing.com/th?id=OIP.EwQqoC5M7EPIsBy1fVepBwHaE8&w=144&h=96&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            title="The Speech of Elon"
            channel="Musk"
            timestamp="2 days ago"
            views="22.9M"

            />
              <Video 
            src="https://www.bing.com/th?id=OIP.wI7SgTdiBDdXkhG0DbrAmwHaEl&w=163&h=101&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            profile="https://www.bing.com/th?id=OIP.EwQqoC5M7EPIsBy1fVepBwHaE8&w=144&h=96&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            title="The Speech of Elon"
            channel="Musk"
            timestamp="2 days ago"
            views="22.9M"

            />
              <Video 
            src="https://www.bing.com/th?id=OIP.wI7SgTdiBDdXkhG0DbrAmwHaEl&w=163&h=101&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            profile="https://www.bing.com/th?id=OIP.EwQqoC5M7EPIsBy1fVepBwHaE8&w=144&h=96&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            title="The Speech of Elon"
            channel="Musk"
            timestamp="2 days ago"
            views="22.9M"

            />
              <Video 
            src="https://www.bing.com/th?id=OIP.wI7SgTdiBDdXkhG0DbrAmwHaEl&w=163&h=101&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            profile="https://www.bing.com/th?id=OIP.EwQqoC5M7EPIsBy1fVepBwHaE8&w=144&h=96&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            title="The Speech of Elon"
            channel="Musk"
            timestamp="2 days ago"
            views="22.9M"

            />
              <Video 
            src="https://www.bing.com/th?id=OIP.wI7SgTdiBDdXkhG0DbrAmwHaEl&w=163&h=101&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            profile="https://www.bing.com/th?id=OIP.EwQqoC5M7EPIsBy1fVepBwHaE8&w=144&h=96&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            title="The Speech of Elon"
            channel="Musk"
            timestamp="2 days ago"
            views="22.9M"

            />
              <Video 
            src="https://www.bing.com/th?id=OIP.wI7SgTdiBDdXkhG0DbrAmwHaEl&w=163&h=101&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            profile="https://www.bing.com/th?id=OIP.EwQqoC5M7EPIsBy1fVepBwHaE8&w=144&h=96&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            title="The Speech of Elon"
            channel="Musk"
            timestamp="2 days ago"
            views="22.9M"

            />
              <Video 
            src="https://www.bing.com/th?id=OIP.wI7SgTdiBDdXkhG0DbrAmwHaEl&w=163&h=101&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            profile="https://www.bing.com/th?id=OIP.EwQqoC5M7EPIsBy1fVepBwHaE8&w=144&h=96&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            title="The Speech of Elon"
            channel="Musk"
            timestamp="2 days ago"
            views="22.9M"

            />
              <Video 
            src="https://www.bing.com/th?id=OIP.wI7SgTdiBDdXkhG0DbrAmwHaEl&w=163&h=101&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            profile="https://www.bing.com/th?id=OIP.EwQqoC5M7EPIsBy1fVepBwHaE8&w=144&h=96&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            title="The Speech of Elon"
            channel="Musk"
            timestamp="2 days ago"
            views="22.9M"

            />
              <Video 
            src="https://www.bing.com/th?id=OIP.wI7SgTdiBDdXkhG0DbrAmwHaEl&w=163&h=101&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            profile="https://www.bing.com/th?id=OIP.EwQqoC5M7EPIsBy1fVepBwHaE8&w=144&h=96&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            title="The Speech of Elon"
            channel="Musk"
            timestamp="2 days ago"
            views="22.9M"

            />
              <Video 
            src="https://www.bing.com/th?id=OIP.wI7SgTdiBDdXkhG0DbrAmwHaEl&w=163&h=101&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            profile="https://www.bing.com/th?id=OIP.EwQqoC5M7EPIsBy1fVepBwHaE8&w=144&h=96&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            title="The Speech of Elon"
            channel="Musk"
            timestamp="2 days ago"
            views="22.9M"

            />
              <Video 
            src="https://www.bing.com/th?id=OIP.wI7SgTdiBDdXkhG0DbrAmwHaEl&w=163&h=101&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            profile="https://www.bing.com/th?id=OIP.EwQqoC5M7EPIsBy1fVepBwHaE8&w=144&h=96&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
            title="The Speech of Elon"
            channel="Musk"
            timestamp="2 days ago"
            views="22.9M"

            />

          </div>
     
            
        </div>
    )
}

export default Recommended
