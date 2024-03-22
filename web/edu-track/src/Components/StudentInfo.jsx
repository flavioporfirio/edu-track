import styles from "./StudentInfo.module.css";

export default function StudentInfo({ selectedStudent }) {
  return (
    <div className={styles.studentInfo}>
      <div>
        <p>Nome do Aluno</p>
        <p>{selectedStudent.aluno.nome}</p>
      </div>
      <div>
        <p>Série</p>
        <p>{selectedStudent.aluno.turma.ano}</p>
      </div>
    </div>
  );
}
