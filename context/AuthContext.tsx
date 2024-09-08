'use client'
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { baseUrl } from '@/utils/data/sample';

// Set up an Axios interceptor
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('blue_sands_user@token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

interface AuthContextType {
    isAuthenticated: boolean;
    storeToken: (token: string, user: any) => void;
    user: any;
    getProfile: () => Promise<any>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter()
    const pathname = usePathname();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const token = localStorage.getItem('blue_sands_user@token');
        const user = localStorage.getItem('blue_sands_user@user');
        setIsAuthenticated(token ? true : false)
        setUser(user ? JSON.parse(user) : null)
    }, [isAuthenticated]);

    useEffect(() => {
        const token = localStorage.getItem('blue_sands_user@token');
        if (pathname === '/login' && token) {
            router.push('/dashboard');
        }

        if (pathname === '/signup' && token) {
            router.push('/dashboard');
        }

        if (pathname === '/dashboard' && !token) {
            router.push('/login');
        }
    }, [isAuthenticated, pathname]);

    const storeToken = (token: string, user: any) => {
        localStorage.setItem('blue_sands_user@token', token);
        localStorage.setItem('blue_sands_user@user', JSON.stringify(user));
        setIsAuthenticated(true);
    };

    const getProfile = async () => {
        const token = localStorage.getItem('blue_sands_user@token');
        if (!token) {
            throw new Error('No token found');
        }
        try {
            const response = await axios.get(`${baseUrl}/auth/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response.data.user;
        } catch (error) {
            console.error('Error fetching profile:', error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('blue_sands_user@token');
        setIsAuthenticated(false);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, storeToken, user, getProfile, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
