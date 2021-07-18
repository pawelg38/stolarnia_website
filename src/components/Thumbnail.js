import classes from './Thumbnail.module.scss';
import img from '../assets/img/img1.jpg';

function Thumbnail(props) {
  return (
    <div className={`${classes.thumbnailImg} ${props.active?classes.active:null}`}>
      <img src={props.img} alt="gallery-item"/>
    </div>
  )
}

export default Thumbnail;