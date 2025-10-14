const BASE_URL = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, '');

export const API_ROUTES = {
  AUTH: {
    SIGNIN: `${BASE_URL}/auth/signin`,
    SIGNUP: `${BASE_URL}/auth/signup`,
    GOOGLE: `${BASE_URL}/auth/google`,
  },
  USUARIO: {
    LIST: `${BASE_URL}/usuario`,
    GET: (id: string | number) => `${BASE_URL}/usuario/${id}`,
    UPDATE: (id: string | number) => `${BASE_URL}/usuario/${id}`,
    DELETE: (id: string | number) => `${BASE_URL}/usuario/${id}`,
  },
};