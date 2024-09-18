import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: workoutsDispatch } = useWorkoutsContext()
    const logout = () => {
        localStorage.removeItem('user') //to remove user
        dispatch({ type: 'LOGOUT' }) //dispatch logout action
        workoutsDispatch({ type: 'SET_WORKOUTS', payload: null })
    }
    return { logout }
}