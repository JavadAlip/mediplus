import { createContext, useEffect, useReducer } from "react";

const initialState = {
    user: localStorage.getItem('user') != undefined ? JSON.parse(localStorage.getItem('user')):null,
    role: localStorage.getItem('role') || null,
    token: localStorage.getItem('token') || null,
};

export const authContext = createContext(initialState)
const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                role: null,
                token: null
            }

        case 'LOGIN_SUCCESS':
            return{
                user:action.payload.user,
                token:action.payload.token,
                role:action.payload.role
            }

        case 'LOGOUT':
            return {
                user: null,
                role: null,
                token: null
            }
        default:
            return state;
    }
}
export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(state.user));
        localStorage.setItem('token',state.token);
        localStorage.setItem('role',state.role)
    },[state])


    return (<authContext.Provider value={{user:state.user, token:state.token, role:state.role, dispatch}}>
        {children}
    </authContext.Provider>
    )
}




// import { createContext, useEffect, useReducer } from "react";

// const initialState = {
//     user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
//     role: localStorage.getItem('role') || null,
//     token: localStorage.getItem('token') || null,
//     doctor: localStorage.getItem('doctor') ? JSON.parse(localStorage.getItem('doctor')) : null,
// };

// export const authContext = createContext(initialState);

// const authReducer = (state, action) => {
//     switch (action.type) {
//         case 'LOGIN_START':
//             return {
//                 ...state,
//                 user: null,
//                 role: null,
//                 token: null,
//                 doctor: null
//             };

//         case 'LOGIN_SUCCESS':
//             return {
//                 ...state,
//                 user: action.payload.user,
//                 token: action.payload.token,
//                 role: action.payload.role
//             };

//         case 'LOGOUT':
//             return {
//                 ...state,
//                 user: null,
//                 role: null,
//                 token: null,
//                 doctor: null
//             };

//         case 'SET_DOCTOR':
//             return {
//                 ...state,
//                 doctor: action.payload.doctor
//             };

//         default:
//             return state;
//     }
// };

// export const AuthContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(authReducer, initialState);

//     useEffect(() => {
//         localStorage.setItem('user', JSON.stringify(state.user));
//         localStorage.setItem('token', state.token);
//         localStorage.setItem('role', state.role);
//         localStorage.setItem('doctor', JSON.stringify(state.doctor));
//     }, [state]);

//     return (
//         <authContext.Provider value={{ ...state, dispatch }}>
//             {children}
//         </authContext.Provider>
//     );
// };
