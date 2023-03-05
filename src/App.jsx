import { Link, Outlet } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className='main-panel'>
      <div className='title'>
        <h1>LOCK-IN</h1>
        <h3>São Paulo</h3>
      </div>
      <div className='nav'>
        <Link to='list'>Lista</Link>
        <Link to='calendar'>Calendario</Link>
        <Link to='table'>Partidas</Link>
      </div>
      <Outlet />
    </div>
  )
}
