import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import { AuthContext, AuthProvider } from "./contexts/auth.js";

import LoginPage from './pages/LoginPage/index.jsx';
import HomePage from './pages/HomePage/index.jsx';

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
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
    )
    }

export default AppRoutes;