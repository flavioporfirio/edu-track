import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useGetProfessor from "./Hooks/useGetProfessor";
import Ajuda from "./Pages/Ajuda";
import PageNotFound from "./Pages/PageNotFound";
import TelaCadastro from "./Pages/TelaCadastro";
import TelaInicial from "./Pages/TelaInicial";
import TelaLogin from "./Pages/TelaLogin";
import "./index.css";

export default function App() {
  const [ra, setRa] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useGetProfessor(ra);

  function handleRA(RA) {
    setRa(RA);
  }

  function handlePassword(pass) {
    setPassword(pass);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <TelaLogin
                ra={ra}
                password={password}
                user={user}
                onHandleRA={handleRA}
                onHandlePassword={handlePassword}
              />
            }
          />
          <Route path="cadastro" element={<TelaCadastro />} />
          <Route
            path="/pesquisarAlunos"
            element={<TelaInicial user={user} />}
          />
          <Route path="ajuda" element={<Ajuda />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
