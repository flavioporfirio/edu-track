import { Link } from "react-router-dom";
import useGetStudentList from "../Hooks/useGetStudentList";
import PageNav from "./PageNav";
import styles from "./RelatorioFaltasAluno.module.css";

/*Esta dando erro, pq no momento estou pegando os dados do aluno (selectedStudent), tenho que arrumar o JSON para ter uma dimensao_faltas, onde é separado por turmas, ano, data, professor e disciplina  */

export default function AbsenceReport({ user, selectedStudent }) {
  const { studentList } = useGetStudentList();
  const absenceObj = [];
  console.log(studentList);

  studentList.map((student) =>
    absenceObj.push({
      faltas: student.faltas,
      ano: student.ano,
      turma: student.turma,
    })
  );

  const getTurmasComFaltas = () => {
    /* Tenho que fazer para ano, professores e datas ainda, por enquanto esta só para turma */
    const turmasComFaltas = absenceObj.reduce((acc, aluno) => {
      const turma = aluno.turma;
      const faltas = aluno.faltas.length;

      if (!acc[turma]) {
        acc[turma] = {
          turma,
          faltas: 0,
        };
      }

      acc[turma].faltas += faltas;

      return acc;
    }, {});

    return Object.values(turmasComFaltas);
  };

  const turmasComFaltas = getTurmasComFaltas();

  console.log(absenceObj);
  return (
    <main className="main">
      <PageNav user={user} />

      <h1>EduTrack</h1>
      <h3 className="subtitle">Relatório de faltas</h3>

      <div className={styles.absenceContainer}>
        <table>
          <thead>
            <tr>
              <th>Turma</th>
              <th>Faltas</th>
            </tr>
          </thead>
          <tbody>
            {turmasComFaltas.map((turma) => (
              <tr key={turma.turma}>
                <td>{turma.turma}</td>
                <td>{turma.faltas}</td>
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
            Registrar falta
          </button>
        </div>
      </div>
    </main>
  );
}
