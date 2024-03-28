import { Link } from "react-router-dom";
import StudentInfo from "../Components/StudentInfo";
import PageNav from "./PageNav";
import styles from "./RelatorioFaltasAluno.module.css";

export default function AbsenceReport({ user, selectedStudent }) {
  // Function to count absences by subject
  const countAbsences = (data) => {
    const subjectCounts = data.reduce((acc, absence) => {
      acc[absence.subject] = (acc[absence.subject] || 0) + 1;
      return acc;
    }, {});
    return subjectCounts;
  };

  // Get the counts
  const subjectAbsenceCounts = countAbsences(selectedStudent.faltas);

  console.log(subjectAbsenceCounts);

  return (
    <main className="main">
      <PageNav user={user} />

      <h1>EduTrack</h1>
      <h3 className="subtitle">Relatório de faltas</h3>

      <StudentInfo selectedStudent={selectedStudent} />

      <div className={styles.absenceContainer}>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Absences</th>
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
              updateStudentData(subject, date, selectedStudent);
              navigate("/opcao");
            }}
          >
            Gerar relatório
          </button>
        </div>
      </div>
    </main>
  );
}
