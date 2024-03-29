import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthContext'
import Login from '../Login/Login'
import { Navigate, useNavigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
    let navigate = useNavigate()
    let { isUserLoggedIn, setIsUserLoggedIn } = useContext(AuthContext)

    if (isUserLoggedIn) {
        return children
    } else {
        return <Navigate to={'/login'}/>
    }

}

export default ProtectedRoute