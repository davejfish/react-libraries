import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Chart from './components/Chart/Chart';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="content">
      <nav className='navbar'>
        <Link to="/table" className='navbar-item'>Table</Link>
        <Link to="/charts" className='navbar-item'>Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1 className='title'>Table Library</h1>
          <Table />
        </Route>
        <Route path="/charts">
          <h1 className='title'>Chart Library</h1>
          <Chart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
