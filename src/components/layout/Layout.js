import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

import classes from './Layout.module.scss';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      {props.children}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout;