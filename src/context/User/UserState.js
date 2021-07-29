/* Aqui definimos el estado */

import React, { useReducer } from 'react';
import UserReducer from './UserReducer'
import UserContext from './UserContext';
import axios from 'axios'

const UserState = (props) => {

    /* El estado inicial de nuestra aplicacion */
    const initialState  = {
        users: [],
        selectedUser: null
    }

    /* -Reducer: Son las acciones que se van a ejuatar segun yo le diga */
    const [state , dispatch] = useReducer(UserReducer, initialState)
    
    /* Funciones para obtener algo en este caso obtenerUsuarios  */
    const getUsers = async () => {
        const res = await axios.get('https://reqres.in/api/users')
        console.log(res);
        dispatch({
            type: 'GET_USERS',
            payload: res.data.data
        });
    }

    const getProfile = async (id) => {
        const res = await axios.get('https://reqres.in/api/users/' + id)
        console.log(res.data.data);
        dispatch({
            type: 'GET_PROFILE',
            payload: res.data.data
        });
    }

    return (
        /* Aqui exportamos userContext para decirle que vamos a usar para que tenga acceso a nuestras
        funciones */
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getProfile,
            getUsers

        }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserState;