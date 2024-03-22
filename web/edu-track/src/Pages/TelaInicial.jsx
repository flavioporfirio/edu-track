import Student from "../Components/Student";
import PageNav from "./PageNav";
import styles from "./TelaInicial.module.css";

export default function TelaInicial({
  user,
  nome,
  onHandleSetNome,
  studentList,
  onHandleSelectStudent
}) {
  console.log(studentList);

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
        <div className={styles.studentListContainer}>
          {studentList.map((student) => (
            <Student student={student} key={student.aluno.matricula} onHandleSelectStudent={onHandleSelectStudent} />
          ))}
        </div>
      </div>
    </main>
  );
}
