import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import mongoDB from "./Hooks/mongoDB";
import useGetProfessor from "./Hooks/useGetProfessor";
import useGetSelectedStudent from "./Hooks/useGetSelectedStudent";
import Ajuda from "./Pages/Ajuda";
import PageNotFound from "./Pages/PageNotFound";
import RegistroFaltas from "./Pages/RegistroFaltas";
import RelatorioFaltas from "./Pages/RelatorioFaltas";
import RelatorioFaltasAluno from "./Pages/RelatorioFaltasAluno";
import TelaCadastro from "./Pages/TelaCadastro";
import TelaInicial from "./Pages/TelaInicial";
import TelaLogin from "./Pages/TelaLogin";
import TelaOpcao from "./Pages/TelaOpcao";
import "./index.css";

export default function App() {
  const [ra, setRa] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const { user } = useGetProfessor(ra);
  const { user1 } = mongoDB();
  console.log(user1);
  const { student } = useGetSelectedStudent(nome);

  function handleRA(RA) {
    setRa(RA);
  }

  function handlePassword(pass) {
    setPassword(pass);
  }

  function handleNome(nome) {
    setNome(nome);
  }

  function handleRA(ra) {
    setRa(ra);
  }

  function handleSelectStudent(studentObj) {
    setSelectedStudent(studentObj);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            index
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
          <Route path="/cadastro" element={<TelaCadastro />} />
          <Route
            path="pesquisarAlunos"
            element={
              <TelaInicial
                user={user}
                nome={nome}
                onHandleSetNome={handleNome}
                student={student}
                onHandleSelectStudent={handleSelectStudent}
              />
            }
          />
          <Route
            path="opcao"
            element={
              <TelaOpcao user={user} selectedStudent={selectedStudent} />
            }
          />
          <Route
            path="/registroFaltas"
            element={
              <RegistroFaltas user={user} selectedStudent={selectedStudent} />
            }
          />
          <Route
            path="/relatorioFaltas"
            element={<RelatorioFaltas user={user} />}
          />
          <Route
            path="/relatorioFaltasAluno"
            element={
              <RelatorioFaltasAluno
                user={user}
                selectedStudent={selectedStudent}
              />
            }
          />

          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
