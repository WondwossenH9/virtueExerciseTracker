import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    
    const logout = () => {
        localStorage.removeItem('user') //to remove user
        dispatch({type: 'LOGOUT'}) //dispatch logout action
    }
    return {logout}
}