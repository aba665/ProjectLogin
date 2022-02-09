import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import { AuthContext, AuthProvider } from "./contexts/auth.js";

import LoginPage from './pages/LoginPage/index.jsx';
import HomePage from './pages/HomePage/index.jsx';
import LandingPage from "./pages/LandingPage/index.jsx";

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading){
            return <div className="loading">Carregando...</div>
        }

        if(!authenticated){
            return <Navigate to='/login' />
        }
        return children;
    }
    return(
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/login" element= {<LoginPage />} />
                        <Route path="/home" element={<Private><HomePage /></Private>} /> 
                        <Route path="/" element={<LandingPage />}/>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
    )
    }

export default AppRoutes;