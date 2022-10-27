import './App.css';
import { routes } from './Routes/Routes';
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <RouterProvider router={routes}>

      </RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
