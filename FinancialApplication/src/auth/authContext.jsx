import {
    createContext,
    useContext,
    useEffect,
    useState,
    useMemo,
  } from "react";
import { auth } from "./firebaseConfig.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { AuthContext } from "./authHelpers.js";
  
//const AuthContext = createContext();
  
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);
  
    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error("Logout error:", err);
        }
    };
  
   
    const value = useMemo(
      () => ({ currentUser, loading, logout }),
      [currentUser, loading]
    );
  
   
    if (loading) {
      return <div>Loading authentication...</div>;
    }
  
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    );
  }
  
   export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) {
      throw new Error("useAuth must be used within <AuthProvider>");
    }
    return ctx;
  } 
  