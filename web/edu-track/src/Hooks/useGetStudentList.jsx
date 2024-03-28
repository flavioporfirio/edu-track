import { useEffect, useState } from "react";

export default function useGetListAlunos() {
  const [studentList, setStudentList] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const res = await fetch(`http://localhost:3333/fato_aluno`);
      const fetchData = await res.json();
      setStudentList(fetchData);
    }
    fetchData();
  }, []);

  return { studentList };
}
