import { createContext } from 'react';

const UserContext = createContext({
    email: '',
    isAuthenticated: false,
    name: 'guest',
})

export default UserContext;
