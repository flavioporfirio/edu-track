import { useEffect, useState } from "react";

export default function useGetProfessor(ra) {
  const [user, setUser] = useState({});

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchData() {
        try {
          const res = await fetch(`https://edu-track.onrender.com/${ra}`, {
            signal: controller.signal,
          });
          const fetchData = await res.json();

          setUser(fetchData);
          console.log(fetchData);
        } catch (err) {
          console.error(err.message);
        }
      }
      fetchData();

      return function () {
        controller.abort();
      };
    },
    [ra]
  );

  return { user };
}

//          `https://my-json-server.typicode.com/flavioporfirio/server/dimensao_professor?ra=${ra}`
//https://edutrack-server-j5zb.onrender.com/fato_aluno
