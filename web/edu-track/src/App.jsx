import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ajuda from "./Pages/Ajuda";
import PageNotFound from "./Pages/PageNotFound";
import TelaCadastro from "./Pages/TelaCadastro";
import TelaLogin from "./Pages/TelaLogin";
import "./index.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaLogin />} />
          <Route path="cadastro" element={<TelaCadastro />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="ajuda" element={<Ajuda />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
