import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routers';

function App() {
  return <RouterProvider router={router} />;
}
export default App;
