/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./Student.module.css";

export default function Student({ student, onHandleSelectStudent }) {
  const navigate = useNavigate();
  console.log(student);

  return (
    <div
      className={styles.studentContainer}
      onClick={() => {
        onHandleSelectStudent(student);
        navigate("/opcao");
      }}
    >
      <div className={styles.studentInfo}>
        <p>{student.nome}</p>
        <p>{student.turma}</p>
      </div>
    </div>
  );
}
