import React,{useEffect, useState} from 'react'
import "./Recommended.css"
import Video from './Video'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import db from './firebase';
import firebase from "firebase"


function getModalStyle() {
  const top = 50;
  const left = 50;

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
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [title,setTitle]=useState();
    const [imageUrl,setImageUrl]=useState();
    const[texts,setTexts]=useState([]);
    
    useEffect(()=>{
      db.collection("contents").orderBy("timestamp","desc").onSnapshot(snapshot=>{
        setTexts(snapshot.docs.map(doc=>doc.data()))
      })
    },[])

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const upload =(e)=>{
        e.preventDefault();
        db.collection("contents").add({
            src:imageUrl,
            title:title,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()

        })
        setTitle("")
        setImageUrl("")
        handleClose();
    }
  
    return (
        <div className="recommended">
                <Modal
        open={open}
        onClose={handleClose}
    
      >
          <div style={modalStyle} className={classes.paper}>
        <form className="recommended__form">
        <input
         value={title}
         placeholder="Enter the Title.."
         onChange={e=>setTitle(e.target.value)}
         />
         <input
         placeholder="Enter the ImageUrl"
         value={imageUrl}
         onChange={e=>setImageUrl(e.target.value)}
         
         />
        <Button disabled={!imageUrl}  type="submit" onClick={upload}>Submit</Button>
        </form>
        
          </div>
       
      </Modal>
            <h2>Recommended</h2>
            <Button onClick={()=>handleOpen()}>CreateThumnail</Button>

            
          <div className="recommended__videos">
          {
                texts.map(text=>(
                    <Video 
            src={text.src}
            title={text.title}
            channel="u need to select"
            timestamp="wait.."
            views="wait for views..."

            />
              

                ))
            }

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
