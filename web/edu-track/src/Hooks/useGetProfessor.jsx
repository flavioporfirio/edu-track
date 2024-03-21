import { useEffect, useState } from "react";

export default function useGetProfessor(ra) {
  const [user, setUser] = useState({});

  useEffect(
    function () {
      async function fetchData() {
        const res = await fetch(
          `http://localhost:3333/dimensao_professor?ra=${ra}`
        );
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
