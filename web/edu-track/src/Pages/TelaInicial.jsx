import { Link } from "react-router-dom";
import Student from "../Components/Student";
import PageNav from "./PageNav";
import styles from "./TelaInicial.module.css";

export default function TelaInicial({
  user,
  nome,
  onHandleSetNome,
  student,
  onHandleSelectStudent,
  data1,
}) {
  console.log(student);

  return (
    <main className={styles.main}>
      <PageNav user={user} />
      <h1>EduTrack</h1>
      <div className={styles.container}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Digite o nome do aluno"
            value={nome}
            onChange={(e) => onHandleSetNome(e.target.value)}
          />
        </form>
        <div className={styles.studentContainer}>
          {student.map((student) => (
            <Student
              student={student}
              key={student.ra}
              onHandleSelectStudent={onHandleSelectStudent}
            />
          ))}
        </div>
        <button>
          <Link to="/relatorioFaltas" type="link">
            Relatório de faltas
          </Link>
        </button>
      </div>
    </main>
  );
}
