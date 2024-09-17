import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages and components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
