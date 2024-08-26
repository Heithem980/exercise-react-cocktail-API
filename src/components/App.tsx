import "../css/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GetRandomCocktail } from "./GetRandomCocktail";
import { Header } from "./Header";
import { Details } from "./Details";






export function App() {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<GetRandomCocktail />} />
            <Route path="/Details" element={<Details />} />
          </Routes>
        </main>
      </>
    </Router>
  );
}
