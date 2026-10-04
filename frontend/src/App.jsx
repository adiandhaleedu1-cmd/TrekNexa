import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from './components/common/Footer';

import HomePage from "./components/Home/HomePage";
import ExploreForts from './components/ExploreForts/ExploreFortsPage';
import PlanTrek from './components/PlanTrek/PlanTrekPage';
import AboutPage from './components/About/AboutPage';

import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExploreForts />} />
            <Route path="/plan-trek" element={<PlanTrek />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App
