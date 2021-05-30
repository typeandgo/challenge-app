import 'styles/index.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from 'pages/Home';
import AddLink from 'pages/AddLink';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/add-link'>
          <AddLink />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
