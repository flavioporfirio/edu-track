import { useNavigate } from "react-router-dom";
import StudentInfo from "../Components/StudentInfo";
import PageNav from "./PageNav";
import styles from "./TelaOpcao.module.css";

export default function TelaOpcao({ user, selectedStudent }) {
  const navigate = useNavigate();

  return (
    <main className="main">
      <PageNav user={user} />

      <h1>EduTrack</h1>

      <div className={styles.opcaoContainer}>
        <StudentInfo selectedStudent={selectedStudent} />
        <div className={styles.btnContainer}>
          <button onClick={() => navigate("/registroFaltas")}>
            Registrar falta
          </button>
          <button onClick={() => navigate("/relatorioFaltasAluno")}>
            Relatório de faltas
          </button>
        </div>
      </div>
    </main>
  );
}
