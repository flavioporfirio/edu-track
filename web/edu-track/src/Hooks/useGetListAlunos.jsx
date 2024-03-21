import { useEffect, useState } from "react";

export default function useGetListAlunos(nome) {
  const [studentList, setStudentList] = useState([]);

  useEffect(
    function () {
      async function fetchData() {
        const res = await fetch(`http://localhost:3333/fato_aluno`);
        const fetchData = await res.json();
        setStudentList(
          fetchData.filter((data) => {
            const name = data.aluno.nome;
            return name.split(" ")[0] == nome ? data : "";
          })
        );
      }
      fetchData();
    },
    [nome]
  );

  return { studentList };
}
