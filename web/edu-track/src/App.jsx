import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./Pages/PageNotFound.jsx";
import TelaLogin from "./Pages/TelaLogin.jsx";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaLogin />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
