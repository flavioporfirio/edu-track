import { useEffect, useState } from "react";

export default function useGetListAlunos() {
  const [studentList, setStudentList] = useState([]);

  useEffect(function () {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const res = await fetch(`https://edu-track.onrender.com/fato_aluno`, {
          signal: controller.signal,
        });
        const fetchData = await res.json();
        console.log(fetchData);
        setStudentList(fetchData);
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchData();

    return function () {
      controller.abort();
    };
  }, []);

  return { studentList };
}
