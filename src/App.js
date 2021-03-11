import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Leagues from './Components/Leagues/Leagues';
import NoMatch from './Components/NoMatch/NoMatch';
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/leagues">
            <Leagues></Leagues>
          </Route>
          <Route path="/league-details/:idLeague">
            <LeagueDetails></LeagueDetails>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
