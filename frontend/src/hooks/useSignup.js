import { useState } from 'react'
import { useAuthContext } from './useAuthContext'


export const useSignup = () => {
    const [error, setError] = useState(null) //state for error
    const [isLoading, setIsLoading] = useState(null) //state for loading
    const { dispatch } = useAuthContext() //grab dispatch function to use the AuthContext

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null)
        //make post request
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json() //get json data response

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            //save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            //update auth context
            dispatch({ type: 'LOGIN', payload: json })
            setIsLoading(false)
        }

    }
    return { signup, isLoading, error }
}