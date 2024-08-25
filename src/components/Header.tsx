import { ReactElement } from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";


export function Header(): ReactElement {
    return (
      <header className="header">
        <h1>Cocktail-wiki</h1>
      <nav className="nav">
      <Link to="/" className="link">Home</Link>
      <Link to="/about" className="link">Search</Link>
        
      </nav>
    </header>
    );
  }
  