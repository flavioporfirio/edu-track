import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "../Components/Select";
import sendEmail from "../Hooks/sendEmail";
import PageNav from "./PageNav";
import styles from "./RegistroFaltas.module.css";
import { toast } from "sonner";

export default function RegistroFaltas({ user, selectedStudent }) {
  const [subject, setSubject] = useState(selectedStudent.disciplina[0].nome);
  const [date, setDate] = useState("");
  const [situation, setSituation] = useState(selectedStudent.situacao);

  const navigate = useNavigate();

  function handleSubject(sub) {
    setSubject(sub);
  }

  function updateStudentData(subject, date, selectedStudent) {
    selectedStudent.faltas.push({
      materia: subject,
      data: date,
      professor: user.nome,
    });

    sendEmail(selectedStudent);

    toast.success("Falta registrada com sucesso");

    fetch(`https://edu-track.onrender.com/${selectedStudent._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...selectedStudent,
      }),
    });
  }

  return (
    <main className="main">
      <PageNav user={user} />

      <h1>EduTrack</h1>
      <h3 className="subtitle">Registro de faltas</h3>

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
          <Link to="/opcao" type="link">
            Cancel
          </Link>
          <button
            onClick={() => {
              updateStudentData(subject, date, selectedStudent);
              navigate("/opcao");
            }}
          >
            Registrar falta
          </button>
        </div>
      </div>
    </main>
  );
}
