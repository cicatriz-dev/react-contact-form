import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../modules/Home';
import Contact from '../modules/Contact';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contato" component={Contact} />
        <Redirect from="/*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
