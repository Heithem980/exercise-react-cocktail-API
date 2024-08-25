import "../css/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GetRandomCocktail } from "./GetRandomCocktail";
import { Header } from "./Header";
import { Details } from "./Details"




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

/*



export function App() {
  return (
    <>


      <Header/>
      <main>
        <GetRandomCocktail/>
      </main>
      
    </>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

*/
