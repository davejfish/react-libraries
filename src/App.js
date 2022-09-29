import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <Link to="/table" className='navbar-item'>Table</Link>
        <Link to="/charts" className='navbar-item'>Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Library</h1>
          <Table />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
