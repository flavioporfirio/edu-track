import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "../Components/Select";
import StudentInfo from "../Components/StudentInfo";
import PageNav from "./PageNav";
import styles from "./RegistroFaltas.module.css";

export default function RegistroFaltas({ user, selectedStudent }) {
  const [subject, setSubject] = useState(selectedStudent.disciplina[0].nome);
  const [date, setDate] = useState("");

  const navigate = useNavigate();

  function handleSubject(sub) {
    setSubject(sub);
  }

  return (
    <main className="main">
      <PageNav user={user} />
      <h1>EduTrack</h1>
      <StudentInfo selectedStudent={selectedStudent} />
      <div className={styles.absenceContainer}>
        <div className={styles.subject}>
          <h3>Matéria</h3>
          <Select
            disc={selectedStudent.disciplina}
            onHandleSubject={handleSubject}
          />
        </div>
        <div className={styles.date}>
          <h3>Data</h3>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.btnContainer}>
        <Link to="ajuda" type="link">
          Ajuda*
        </Link>
        <div>
          <Link to="/" type="link">
            Cancel
          </Link>
          <button onClick={() => navigate("/opcao")}>Registrar falta</button>
        </div>
      </div>
    </main>
  );
}
