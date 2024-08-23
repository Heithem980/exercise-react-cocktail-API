import { ReactElement } from "react";
import "../css/Header.css";


export function Header(): ReactElement {
    return (
      <header className="header">
        <h1>Cocktail-wiki</h1>
      <nav className="nav">
        <a href="/" className="link">Home</a>
        <a href="/about" className="link">Search</a>
        
      </nav>
    </header>
    );
  }
  