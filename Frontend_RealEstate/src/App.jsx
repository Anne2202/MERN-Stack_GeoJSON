import { Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import ListOfProperties from "./components/ListOfProperties";
import OneProperty from "./components/OneProperty";

function App() {
  

  return (
    <>
      <nav>
        <NavLink to={"/properties"}> Show All </NavLink>
      </nav>
      <Routes>
        <Route path="/properties" element={<ListOfProperties />} />
        <Route path="/properties/:id" element={<OneProperty />} />
        {/* <Route path="/pokemon/:id" element={<OnePokemon />} />
        <Route path="/pokemon/:id/:info" element={<DetailedPokemon />} /> */}
      </Routes>
    </>
  )
}

export default App
