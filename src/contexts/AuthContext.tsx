// Step 1: create context with createContext
// Step 2: Identify the components that need to share and access the data (Login, Header)
// Step 3: Provide data thru the context Provider to the list of components -- Refer App.tsx

import { createContext, useContext, useState } from "react";

interface AuthContextProps {
  isAuthenticated: boolean; // needed for the entire -- particularly in ProtectedRoutes
  onLogin: any;
  onLogout: any;
  role: string | undefined;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // check for auth token in session storage
    // if found return true
    // else return false 
    const authToken = sessionStorage.getItem("authToken");
    return !!authToken; // return true or false
  });

  const [role, setRole] = useState<string | undefined>();

  const onLogin = (token: string, role: string) => {
    // store the token in sessionstorage / localstorage
    sessionStorage.setItem("authToken", token);
    sessionStorage.setItem("role", role);
    setIsAuthenticated(true);
    setRole(role);
  }

  const onLogout = () => {
    sessionStorage.removeItem('authToken');
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        onLogin,
        onLogout,
        role
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// custom hook 
// it must have 'use' prefix. 
export const useAuth = () => {
  const context = useContext<any>(AuthContext);

  if(!context) {
    throw new Error(
      "useAuth must be used within AuthProvider's descendents"
    )
  }

  return context;
}
