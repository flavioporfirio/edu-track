import { useEffect, useState } from "react";

export default function useGetListAlunos() {
  const [studentList, setStudentList] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const res = await fetch(
        `https://my-json-server.typicode.com/flavioporfirio/server/fato_aluno`
      );
      const fetchData = await res.json();
      setStudentList(fetchData);
    }
    fetchData();
  }, []);

  return { studentList };
}
