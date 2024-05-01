import { useEffect, useState } from "react";

export default function useGetSelectedStudent(nome) {
  const [student, setStudent] = useState([]);
  const studentArr = [];

  useEffect(
    function () {
      async function fetchData() {
        const res = await fetch(
          `https://edutrack-server-j5zb.onrender.com/fato_aluno`
        );
        const fetchData = await res.json();

        setStudent(
          fetchData.filter((data) => {
            const name = data.nome.split(" ")[0];
            return name.toLowerCase() == nome.toLowerCase() ? data : "";
          })
        );
      }
      fetchData();
    },
    [nome]
  );

  return { student };
}
