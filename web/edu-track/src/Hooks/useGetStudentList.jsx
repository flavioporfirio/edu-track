import { useEffect, useState } from "react";

export default function useGetListAlunos() {
  const [studentList, setStudentList] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const res = await fetch(
        `https://edutrack-server-j5zb.onrender.com/fato_aluno`
      );
      const fetchData = await res.json();
      console.log(fetchData);
      setStudentList(fetchData);
    }
    fetchData();
  }, []);

  return { studentList };
}
