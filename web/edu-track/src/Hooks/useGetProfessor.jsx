import { useEffect, useState } from "react";

export default function useGetProfessor(ra) {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function fetchData() {
        try {
          const res = await fetch(`https://edu-track.onrender.com/${ra}`);

          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }

          const text = await res.text();
          if (text) {
            const fetchData = JSON.parse(text);
            setUser(fetchData);
            console.log(fetchData);
          } else {
            throw new Error("Response was empty");
          }
        } catch (err) {
          console.error("Failed to fetch data:", err.message);
          setError(err.message);
        }
      }
      fetchData();
    },
    [ra]
  );

  return { user, error };
}
