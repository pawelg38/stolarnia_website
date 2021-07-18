import { useState } from 'react';
import classes from './Gallery.module.scss';
import { CSSTransition } from 'react-transition-group';
import Thumbnail from './Thumbnail';

function Gallery(props) {
  const [pickedImg, setPickedImg] = useState(0);
  const [pickedImgLoaded, setPickedImgLoaded] = useState(false);
  function nextImgHandler() {
    setPickedImg(prev => {
      if(prev < props.images.length-1) {
        setPickedImg(prev+1);
      }
      else {
        setPickedImg(0);
      }
    })
  }
  function prevImgHandler() {
    setPickedImg(prev => {
      if(prev > 0) {
        setPickedImg(prev-1);
      }
      else {
        setPickedImg(props.images.length-1);
      }
    })
  }
  if(!props.exitAnimationEnd) {
    return (
      <CSSTransition
      in={props.showGallery}
      classNames={{
        appear: classes.appear,
        appearActive: classes.appearActive,
        exit: classes.exit,
        exitActive: classes.exitActive,
      }}
      onExited={props.setExitAnimationEndHandler}
      appear={true}
      timeout={500}>
        <div className={classes.galleryContainer}>
          <button className={classes.exitBtn} onClick={props.showGalleryHandler}></button>
          <div className={classes.pickedImg}>
            <button className={classes.prevImgBtn} onClick={prevImgHandler}>
              <span class="material-icons" style={{color: '#fff', fontSize: '40px'}}>chevron_left</span>
            </button>
            {props.images.map( (img, index) => {
              if (index === pickedImg)
                return (
                  <div className={classes.imgBox} key={index}>
                    <img className={!pickedImgLoaded ? classes.hideElement : null} onLoad={() => setPickedImgLoaded(true)} src={img} alt=""/>
                    <h1 className={pickedImgLoaded ? classes.hideElement : null}>Loading</h1>
                  </div>
                )
              return null;
            })}
            <button className={classes.nextImgBtn} onClick={nextImgHandler}>
              <span class="material-icons" style={{color: '#fff', fontSize: '40px'}}>chevron_right</span>
            </button>
          </div>
          <div className={classes.otherImages}>
            {props.images.map((img, index) => {
              return <Thumbnail key={index} img={img} active={index===pickedImg ? true:false}/>
            })}
          </div>
        </div>
      </CSSTransition>
    )
  }
  return (
    <></>
  )
}

export default Gallery;