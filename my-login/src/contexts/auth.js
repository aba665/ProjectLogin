import React, { createContext, useEffect, useState } from "react";

import { api, createSession } from '../service/api';

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [ user, setUser ] = useState(null);
    const [loading, setLoading ] = useState(true);

    useEffect(() => {
        const user = localStorage.getItem('user');
        const token = localStorage.getItem('token');

        if(user && token){
            setUser(JSON.parse(user));
            api.defaults.headers.authorization = `Bearer ${token}`;
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const response = await createSession(email, password);

        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
        api.defaults.headers.authorization = `Bearer ${response.data.token}`;
        setUser(response.data.user);
        navigate('/home');
    }
    const Regist = async (email, password) => {
        const response = await createSession(email, password);

        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
        api.defaults.headers.authorization = `Bearer ${response.data.token}`;
        setUser(response.data.user);
        
    }
    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        
        api.defaults.headers.authorization = null;
        setUser(null);
        navigate('/');
    }
    return (
            <AuthContext.Provider
            value= {{
                    authenticated: !!user,
                    user,
                    loading,
                    login,
                    logout,
                    Regist
             }}>
                {children}
            </AuthContext.Provider>

        )
    }