import classes from './Footer.module.scss';
import Box from '@material-ui/core/Box';

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <Box boxShadow={8}>
          <div className={classes.address}>
            <h1>Adres</h1>
            <p>
              Brodnica<br/>
              Bobrowo 87-327<br/>
              Kruszyny Szlacheckie 26<br/>
            </p>
          </div>
        </Box>
        <Box boxShadow={2}>
          <div className={classes.contact}>
            <h1>Kontakt</h1>
            <p>Numer telefonu +48 456 321 789</p>
          </div>
        </Box>
      </div>
      <Box className={classes.mapBox} boxShadow={8}>
        <h1>Znajdź nas na mapie:</h1>
        <div className={classes.mapouter}>
          <div className={classes.gmap_canvas}>
            <iframe className={classes.gmap_iframe} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Polska Grzybno 87-327&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default Footer;