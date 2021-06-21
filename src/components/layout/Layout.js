import MainNavigation from "./MainNavigation";
import Slider from './Slider';
import Adventages from './Adventages.js';
import PortfolioPreview from "./PortfolioPreview";
import Footer from "./Footer";

import classes from './Layout.module.scss';

function Layout() {
  return (
    <>
      <MainNavigation />
      <Slider />
      <Adventages />
      <PortfolioPreview />
      <Footer />
    </>
  )
}

export default Layout;