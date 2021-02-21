import './App.css';
import Dashboard from './Dashboard.js';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import FormEntry from './FormEntry.js';
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Header />
        <Switch>
          <Route exact
            path='/'
            render={(props) => (
              <Dashboard />
            )}
          />
          <Route path="/FormEntry" component={FormEntry} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
