import { useEffect, useState } from "react";

export default function useGetSelectedStudent(nome) {
  const [student, setStudent] = useState([]);

  useEffect(
    function () {
      async function fetchData() {
        //https://my-json-server.typicode.com/flavioporfirio/server/fato_aluno
        const res = await fetch(`https://edutrack-server/fato_aluno`);
        const fetchData = await res.json();
        console.log(fetchData);
        setStudent(fetchData);
      }
      fetchData();
    },
    [nome]
  );

  return { student };
}

//fetchData.filter((data) => {
//qconst name = data.nome.split(" ")[0];
// return name.toLowerCase() == nome ? data : "";
//})
