import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import './index.css';
import List from './components/List';
import Calendar from './components/Calendar';
import Teams from './components/Teams';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="list" element={<List />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="teams" element={<Teams />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
