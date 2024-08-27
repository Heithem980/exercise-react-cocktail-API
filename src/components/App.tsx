import "../css/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GetCocktailByName, GetRandomCocktail } from "./FetchCocktail";
import { Header } from "./Header";
import { Details } from "./InfoPage";
import { SearchForm } from "./SearchPage";

export function App() {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<GetRandomCocktail />} />
            <Route path="/info" element={<Details />} />
            <Route path="/search" element={<SearchForm />} />

          </Routes>
        </main>
      </>
    </Router>
  );
}
