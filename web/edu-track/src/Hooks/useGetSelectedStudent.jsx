import { useEffect, useState } from "react";

export default function useGetSelectedStudent(nome, handleIsLoading) {
  const [student, setStudent] = useState([]);

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchData() {
        handleIsLoading(true);
        try {
          const res = await fetch(
            `https://edu-track.onrender.com/fato_aluno`,
            { signal: controller.signal }
          );
          const fetchData = await res.json();

          setStudent(
            fetchData.filter((data) => {
              const name = data.nome.split(" ")[0];
              return name.toLowerCase() == nome.toLowerCase() ? data : "";
            })
          );
        } catch (err) {
          console.error(err.message);
        } finally {
          handleIsLoading(false);
        }
      }
      fetchData();

      return function () {
        controller.abort();
      };
    },
    [nome]
  );

  return { student };
}
