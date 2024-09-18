import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

const Navigation = () => {
    const { logout } = useLogout()

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="container" >
                <Link to="/">
                    <h1>Virtue Exercise Tracker</h1>
                </Link>
                <nav>
                    <div> //show if user is logged in
                        <button onClick={handleClick}>Log out</button>
                    </div>
                    <div>//show if user is not logged in
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navigation