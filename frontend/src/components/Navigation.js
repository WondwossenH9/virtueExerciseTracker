import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <header>
            <div className="container" >
                <Link to="/">
                    <h1>Virtue Exercise Tracker</h1>
                </Link>
                <nav>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navigation