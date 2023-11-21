import Header from "./header";
// import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, Slide } from 'react-toastify';




function Layout() {
    const [user, setUser] = useState(null);
    const getUserFromSessionStorage = () => {
        try {
          const userString = sessionStorage.getItem("user"); // Get user from session storage
          const user = JSON.parse(userString); // Parse user to JSON
          return user;
        } catch (error) {
          sessionStorage.setItem("user", ""); // Clear session storage
          return null;
        }
      };
    useEffect(() => {
        const user = getUserFromSessionStorage();
        if (user) {
          setUser(user);
        }
      }, []);
      const handleLogout = () => {
        client.clearStore(); // Clear Apollo Client cache
        sessionStorage.removeItem("user"); // Clear session storage
        setUser(null);  // Clear user from state
      };
    return (
        <div className="app">
            <ToastContainer
                style={{ textAlign: "center" }}
                position='top-center'
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                transition={Slide}
                theme="colored"
            />
            <Header user={user} onLogout={handleLogout} />
            <Outlet />
        </div>
    )
}
export default Layout;