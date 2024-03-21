/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Student from "../Components/Student";
import useGetListAlunos from "../Hooks/useGetListAlunos";
import PageNav from "./PageNav";
import styles from "./TelaInicial.module.css";

export default function TelaInicial({ user }) {
  const [nome, setNome] = useState("");
  const { studentList } = useGetListAlunos(nome);

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
            onChange={(e) => setNome(e.target.value)}
          />
        </form>
        {studentList.map((student) => (
          <Student student={student} />
        ))}
      </div>
    </main>
  );
}
