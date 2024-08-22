import { ReactElement } from "react";
import "../css/Header.css";


export function Header(): ReactElement {
    return (
        <header className="header">
        <p className="logo">Cocktail wiki</p>
        <nav className="navbar">
          <a className="link" href="/">Home</a>
          <a className="link" href="/add-todo">Add</a>
          <a className="link" href="">hmm</a>
        </nav>
      </header>
    );
  }
  