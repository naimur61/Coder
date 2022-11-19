import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Routes } from './Routes/Routes/Routes';


function App() {
  return (
    <div>
      <RouterProvider router={Routes} />
    </div>
  );
}

export default App;
