// constants
export const CLIENT_ID = 'ed3fa32f773e4cac926703a6d5eb956f';
export const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL || 'http://localhost:3000/';
export const API = 'https://api.spotify.com/v1';

// utils
export const getToken = () => localStorage.getItem('_token');
export const setToken = (value: string = '') => localStorage.setItem('_token', value);
export const authHeaders = () => ({
    "Authorization": `Bearer ${getToken()}`,
    "Accept": 'application/json',
    "Content-Type": "application/json",
});
