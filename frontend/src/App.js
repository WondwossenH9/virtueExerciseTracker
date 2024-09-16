import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages and components
import Home from './pages/Home'
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
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
