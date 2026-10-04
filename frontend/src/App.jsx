import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import HomePage from "./components/Home/HomePage";
import ExploreForts from './components/ExploreForts/ExploreFortsPage';
import PlanTrek from './components/PlanTrek/PlanTrekPage';
import AboutPage from './components/About/AboutPage';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Footer from './components/common/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExploreForts />} />
        <Route path="/plan-trek" element={<PlanTrek />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App
