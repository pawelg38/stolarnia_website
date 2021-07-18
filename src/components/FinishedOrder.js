import { useState, useEffect } from 'react';
import classes from './FinishedOrder.module.scss';
import Gallery from './Gallery';

function FinishedOrder(props) {
  const [showGallery, setShowGallery] = useState(false);
  const [exitAnimationEnd, setExitAnimationEnd] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState([]);

  function showGalleryHandler() {
    if (exitAnimationEnd) {
      setShowGallery(true);
      setExitAnimationEnd(false);
    }
    else {
      setShowGallery(false);
    }
  }
  function setExitAnimationEndHandler() {
    setExitAnimationEnd(!exitAnimationEnd);
  }
  
  useEffect(() => {
    const pathRef = props.storageRef.child('finishedOrders/5gJs4afw1q5qZzuOphHB');
    pathRef.listAll().then((res) => {
      res.items.forEach((itemRef) => {
        itemRef.getDownloadURL().then((url) => {
          setImagesLoaded(prev => {
            return prev.concat(url);
          });
        }).catch((error) => {});
      });
    }).catch((error) => {});
  },[])
  
  var button = <h1>Loading</h1>;
  if (imagesLoaded.length !==0) {
    button = 
    (<button onClick={()=>{showGalleryHandler();}}>
      <span class="material-icons" style={{fontSize: "60px", color: "#fff"}}>arrow_right_alt</span>
    </button>)
  }

  return (
    <div className={`${classes.projectSection} ${props.bg} ${showGallery ? classes.unzip : null}`}>
      <div className={classes.info}>
        <h1>{props.msg.title}</h1>
        <p>Zrealizowana na zlecenie w {props.msg.desc}.</p>
      </div>
      {button}
      <Gallery images={imagesLoaded} showGallery={showGallery} showGalleryHandler={showGalleryHandler} exitAnimationEnd={exitAnimationEnd} setExitAnimationEndHandler={setExitAnimationEndHandler}/>
    </div>
  )
}

export default FinishedOrder;