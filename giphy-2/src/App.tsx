import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Details from "./components/Details/Details";
import Favorites from "./components/Favorites/Favorites";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gifs/favorites" element={<Favorites />} />
          <Route path="/gifs/:id" element={<Details />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
