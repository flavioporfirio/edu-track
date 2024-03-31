import { useEffect, useState } from "react";

export default function useGetSelectedStudent(nome) {
  const [student, setStudent] = useState([]);

  useEffect(
    function () {
      async function fetchData() {
        const res = await fetch(
          `https://my-json-server.typicode.com/flavioporfirio/server/fato_aluno`
        );
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
