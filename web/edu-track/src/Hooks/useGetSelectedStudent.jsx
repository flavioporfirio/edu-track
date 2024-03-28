import { useEffect, useState } from "react";

export default function useGetSelectedStudent(nome) {
  const [student, setStudent] = useState([]);

  useEffect(
    function () {
      async function fetchData() {
        const res = await fetch(`http://localhost:3333/fato_aluno`);
        const fetchData = await res.json();
        setStudent(
          fetchData.filter((data) => {
            const name = data.nome.split(" ")[0];
            return name.toLowerCase() == nome ? data : "";
          })
        );
      }
      fetchData();
    },
    [nome]
  );

  return { student };
}
