import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
        <h1>The Movies Saga!</h1>
      <Router>
        <Switch>

          <Route path="/" exact>
            <MovieList />
          </Route>

          {/* Details page */}
          <Route exact path="/details/:id">
            <Details />
          </Route>

          {/* Add Movie page */}

        </Switch>
      </Router>
    </div>
  );
}


export default App;
