/* eslint-disable react/prop-types */
import styles from "./Student.module.css";

export default function Student({ student }) {
  const aluno = student.aluno;

  return (
    <div className={styles.studentContainer}>
      <p>{aluno.nome}</p>
      <p>{aluno.turma.ano}</p>
    </div>
  );
}
