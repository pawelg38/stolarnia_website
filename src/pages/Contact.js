import classes from './Contact.module.scss';

function Contact() {
  return (
    <div className={classes.container}>
      <div className={classes.topMargin}></div>
      <div className={classes.desc}>
        <h1>Skontaktuj się z nami już teraz!</h1>
        <p>
          Telefon: <br/>
          <span className={classes.weightFont}>123 321 456</span>
        </p>
        <p>
          Email: <br/>
          <span className={classes.weightFont}>example@company.com</span>
        </p>
        <div>
          <h1>Znajdź nas na mapie :)</h1>
          <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Brodnica,%20Poland+(Example%20Company)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact;