import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'

import CreateRecipe from './pages/CreateRecipe'
import ViewRecipe from './pages/ViewRecipe'

import Feed from './pages/Feed'
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recipes/:id" element={<ViewRecipe />} />

        <Route path="/create-recipe" element={<ProtectedRoute><CreateRecipe /></ProtectedRoute>} />
        {/* Add more routes as needed */}

        <Route path="/recipes" element={<Feed />} />

      </Routes>
    </Router>
  );
}

export default App;
