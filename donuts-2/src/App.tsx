import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Donut from "./components/Donut/Donut";
import Cart from "./components/Cart/Cart";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/donut/cart" element={<Cart />} />
          <Route path="/donut/:id" element={<Donut />} />
          <Route path="/error-page" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/error-page" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
