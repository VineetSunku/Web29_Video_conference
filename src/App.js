import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import './App.css'
import Home from './pages/Home/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';
function App() {
  const { currentUser } = useContext(AuthContext);

  const AuthRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<AuthRoute><Home/></AuthRoute>),
    },
    {
      path: "/signin",
      element: <SignIn/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;





