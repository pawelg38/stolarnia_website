import Box from '@material-ui/core/Box';

import classes from './Card.module.scss';

function Card(props) {
  return (
    <Box className={classes.iconBox} boxShadow={5}>
      <h1>{props.title}</h1>
      <span className={classes.materialIcons} style={{fontSize: '240px', color: '#fff'}}>{props.icon}</span>
      <p>
        Duis esse consequat dolor exercitation pariatur ullamco occaecat sunt aute.
        Officia anim in nisi anim aliqua aute amet consequat aliqua velit irure officia dolore.
      </p>
    </Box>
  )
}

export default Card;