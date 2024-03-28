import { useEffect, useState } from "react";

export default function useGetFaltas(id) {
  const [studentAbsence, setStudentAbsence] = useState({});

  useEffect(
    function () {
      async function fetchData() {
        const res = await fetch(`http://localhost:3333/dimensao_faltas`);
        const fetchData = await res.json();

        setStudentAbsence(
          fetchData.filter((data) => {
            return data.id == id ? data : "";
          })
        );
        console.log(fetchData);
      }
      fetchData();
    },
    [id]
  );

  return { studentAbsence };
}
