import { Link, Outlet } from 'react-router-dom';
import './App.css';
import List from './components/List';

function App() {
  return (
    <div>
      <h1>LOCK-IN</h1>
      <h3>São Paulo</h3>
      <div className="nav">
        <Link to="list">Lista</Link>
        <Link to="calendar">Calendario</Link>
        <Link to="teams">Equipes</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
