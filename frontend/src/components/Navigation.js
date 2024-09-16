import { Link } from 'react-router-dom'

const Navigation = () => {

    return (
        <header>
            <div className="container" >
                <Link to="/">
                    <h1>Virtue Exercise Tracker</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navigation