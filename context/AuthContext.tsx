'use client'
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { baseUrl } from '@/utils/data/sample';

interface AuthContextType {
    isAuthenticated: boolean;
    storeToken: (token: string) => void;
    getProfile: () => Promise<any>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const router = useRouter()
    const pathname = usePathname();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem('blue_sands_user@token');
        if (token) {
            setIsAuthenticated(true);
        }
    }, [isAuthenticated]);

    useEffect(() => {
        const token = localStorage.getItem('blue_sands_user@token');
        if (pathname === '/login' && token) {
            router.push('/dashboard');
        }

        if (pathname === '/dashboard' && !token) {
            router.push('/login');
        }
    }, [isAuthenticated, pathname]);

    const storeToken = (token: string) => {
        localStorage.setItem('blue_sands_user@token', token);
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
            console.log(response.data)
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
        <AuthContext.Provider value={{ isAuthenticated, storeToken, getProfile, logout }}>
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
