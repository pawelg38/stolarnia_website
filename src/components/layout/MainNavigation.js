import classes from "./MainNavigation.module.scss";
import Box from '@material-ui/core/Box';
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

function MainNavigation() {
  const [isNavOpen, setNavOpen] = useState(false);

  function toggleMenuHandler() {
    console.log(isNavOpen);
    setNavOpen(!isNavOpen);
  }
  const [lightBgClass, setLightBgClass] = useState(false);
  const location = useLocation();

  useEffect(() => {
        if (location.pathname === '/') {
          setLightBgClass(false);
        }
        else {
          setLightBgClass(true);
        }
  },[location])
  
  return (
    <div className={classes.container}>
      <Box boxShadow={13}>
        <div className={` ${classes.mainNav} ${lightBgClass ? classes.lightBg : classes.darkBg }`}>
          <Link to='/'>
            <img className={classes.logo} src={logo} alt="logo"/>
          </Link>
          <div className={classes.dropMenuBtnBox}>
            <div onClick={toggleMenuHandler} className={`${classes.dropMenuBtn} ${isNavOpen ? classes.dropMenuBtnOpened : classes.dropMenuBtnClosed}`}>
              <div />
              <div />
              <div />
            </div>
          </div>
          <CSSTransition
          in={isNavOpen}
          classNames={{
            enter: classes.menuEnter,
            enterDone: classes.menuDone,
            exit: classes.menuExit,
            exitDone: classes.menuExitDone
          }}
          timeout={{ enter: 300, exit: 300 }}>
            <div className={classes.menu}>
              <Link to='/portfolio'>
                <button className={`${classes.customMdBtn} ${lightBgClass ? classes.darkBtn : classes.lightBtn }`}>Portfolio</button>
              </Link>
              <Link to='/about'>
                <button className={`${classes.customMdBtn} ${lightBgClass ? classes.darkBtn : classes.lightBtn }`}>O firmie</button>
              </Link>
              <Link to='/contact'>
                <button className={`${classes.customMdBtn} ${lightBgClass ? classes.darkBtn : classes.lightBtn }`}>Kontakt</button>
              </Link>
            </div>
          </CSSTransition>
        </div>
      </Box>
    </div>
  )
}

export default MainNavigation;