import { useState, useEffect, useContext, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }){
  // Store global auth properties & methods to access anywhere in our app
  let navigate = useNavigate()
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getCurrentUser();
    setUser(userData);
  }, [])

  // 1. Register & Login function
  const loginSaveUser = async (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    console.log(localStorage)
  }

  // 2. Retrieve the user from localStorage
  function getCurrentUser(){
    try {
      let savedData = localStorage.getItem("user");
      savedData = JSON.parse(savedData);
      console.log(savedData)
      return savedData;
    } catch(error) {
      return null;
    }
  }

  // 3. Logout function
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  }

  const value = {
    user,
    loginSaveUser,
    getCurrentUser,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}