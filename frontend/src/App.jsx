import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import CreateRecipe from './pages/createRecipe'
import ViewRecipe from './pages/ViewRecipe'
function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/view-recipe" element={<ViewRecipe />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
