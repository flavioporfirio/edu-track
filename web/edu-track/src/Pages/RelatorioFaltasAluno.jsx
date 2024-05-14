import { useRef } from "react";
import { Link } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import StudentInfo from "../Components/StudentInfo";
import PageNav from "./PageNav";
import styles from "./RelatorioFaltasAluno.module.css";

export default function AbsenceReport({ user, selectedStudent }) {
  const documentContent = useRef();

  const handlePrint = useReactToPrint({
    content: () => documentContent.current,
  });

  const countAbsences = (data) => {
    const subjectCounts = data.reduce((acc, absence) => {
      acc[absence.materia] = (acc[absence.materia] || 0) + 1;

      return acc;
    }, {});

    return subjectCounts;
  };

  const subjectAbsenceCounts = countAbsences(selectedStudent?.faltas);

  console.log(subjectAbsenceCounts);

  return (
    <main className="main" ref={documentContent}>
      <PageNav user={user} />

      <h1>EduTrack</h1>
      <h3 className="subtitle">Relatório de faltas</h3>

      <StudentInfo selectedStudent={selectedStudent} />

      <div className={styles.absenceContainer}>
        <table>
          <thead>
            <tr>
              <th>Materia</th>
              <th>Faltas</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(subjectAbsenceCounts).map(([subject, count]) => (
              <tr key={subject}>
                <td>{subject}</td>
                <td>{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
              handlePrint();
            }}
          >
            Gerar relatório
          </button>
        </div>
      </div>
    </main>
  );
}
