import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { MovieDeatils } from "../pages/MovieDetails";
export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/movies/:id" element={<MovieDeatils />} />
      </Routes>
    </Router>
  );
}