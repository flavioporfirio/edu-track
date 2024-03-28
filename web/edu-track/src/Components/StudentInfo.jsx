import styles from "./StudentInfo.module.css";

export default function StudentInfo({ selectedStudent }) {
  return (
    <div className={styles.studentInfo}>
      <div>
        <p>Nome do Aluno</p>
        <p>{selectedStudent.nome}</p>
      </div>
      <div>
        <p>Série</p>
        <p>{selectedStudent.turma}</p>
      </div>
    </div>
  );
}
