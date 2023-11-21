import {
  Routes,
  Route, Navigate
} from 'react-router-dom';
import { useState, useEffect } from "react"; // React Hooks
import Header from './components/layout/header';
import Home from './pages/home';
import Products from './pages/products';
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Layout from './components/layout/layout';
import NotFound from './pages/notFound';
import Dashboard from './pages/auth/dashboard';
import ProductDetail from './pages/productDetail';
import AddProduct from './pages/addProduct';



function App(props) {
  const [user, setUser] = useState(null);
  const handleLogin = (user) => {
    setUser(user);
    saveTokenToSessionStorage(user);
  };
  const handleLogout = () => {
    console.log('logout');
    props.client.clearStore();
    sessionStorage.removeItem("user");
    setUser(null);
  };
  function saveTokenToSessionStorage(user) {
    sessionStorage.setItem("user", JSON.stringify(user)); // Save user to session storage as a string
  }
  const getUserFromSessionStorage = () => {
    try {
      const userString = sessionStorage.getItem("user");
      const user = JSON.parse(userString);
      return user;
    } catch (error) {
      sessionStorage.setItem("user", "");
      return null;
    }
  };

  function ProtectedRoute({ component: Component, ...rest }) {
    const user = getUserFromSessionStorage(); // Get user from session storage
    // If user is not logged in, redirect to login page
    if (!user) {
      return <Navigate to="/login" replace />; // Redirect to login page
    }
    return <Component {...rest} user={user} />; // Render protected component
  }


  useEffect(() => {
    const user = getUserFromSessionStorage();
    if (user) {
      setUser(user);
    }
  }, []);

  return (

    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='product'>
          <Route path=':id' element={<ProductDetail user={user}/> }></Route>
          <Route
            path="add"
            element={
              <ProtectedRoute component={AddProduct} user={user} />
            }
          />
        </Route>
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
        <Route path='/register' element={<Register onLogin={handleLogin} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute component={Dashboard} user={user} onLogout={handleLogout} />
          }
        />

        {/* <Route path="/dashboard" user={user} onLogout={handleLogout} element={<Dashboard />} /> */}
        <Route path='*' element={<NotFound />}></Route>
      </Route>
    </Routes>
  )
}

export default App;
