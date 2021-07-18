import { Route, Switch } from 'react-router-dom';
import Layout from "./components/layout/Layout";
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import { CSSTransition } from 'react-transition-group';

import classes from './App.module.scss';
import About from './pages/About';
import Contact from './pages/Contact';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/portfolio', name: 'Portfolio', Component: Portfolio },
  { path: '/about', name: 'About', Component: About },
  { path: '/contact', name: 'Contact', Component: Contact }
]

function App() {
  return (
    <Layout>
    {routes.map(({ path, Component }) => (
      <Route key={path} exact path={path}>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            classNames={{
              enter: classes.enter,
              enterActive: classes.enterActive,
              exit: classes.exit,
              exitActive: classes.exitActive,
            }}
            timeout={{enter:500, exit:500}}
            unmountOnExit
          >
            <Component />
          </CSSTransition>
        )}
      </Route>
    ))}
      {/* <Switch> */}
        {/* <Route path='/' exact>
          <Home />
        </Route> */}
        {/* <Route path='/portfolio'>
          <Portfolio />
        </Route> */}
      {/* </Switch> */}
    </Layout>
  );
}

export default App;
