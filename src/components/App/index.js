import 'styles/index.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from 'pages/Home';
import AddLink from 'pages/AddLink';

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
      </Switch>
    </Router>
  );
}

export default App;
