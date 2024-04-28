import { useEffect, useState } from "react";

export default function useGetProfessor(ra) {
  const [user, setUser] = useState({});

  useEffect(
    function () {
      async function fetchData() {
        const res = await fetch("https://edutrack-server-j5zb.onrender.com");
        const fetchData = await res.json();

        setUser(fetchData[0]);
        console.log(fetchData);
      }
      fetchData();
    },
    [ra]
  );

  return { user };
}

//          `https://my-json-server.typicode.com/flavioporfirio/server/dimensao_professor?ra=${ra}`
//https://edutrack-server-j5zb.onrender.com/fato_aluno
