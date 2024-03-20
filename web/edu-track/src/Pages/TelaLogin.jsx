import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./TelaLogin.module.css";

export default function TelaLogin() {
  const [user, setUser] = useState({});
  const [RA, setRA] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin() {
    if (user.RA === RA && user.password === password) {
      navigate("cadastro");
      console.log("aqui");
    }
  }

  useEffect(
    function () {
      async function fetchData() {
        const res = await fetch(
          `http://localhost:3333/dimensao_professor?RA=${RA}`
        );
        const fetchData = await res.json();

        setUser(fetchData[0]);
        console.log(fetchData);
      }
      fetchData();
    },
    [RA]
  );

  return (
    <main className={styles.main}>
      <h1>EduTrack</h1>
      <div className={styles.container}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div className={styles.formField}>
            <label htmlFor="ra">RA</label>
            <input
              type="text"
              id="ra"
              value={RA}
              onChange={(e) => setRA(e.target.value)}
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {}
          </div>
          <div className={styles.createAccount}>
            <p>Cadastrar professor</p>
            <button>Entrar</button>
          </div>
          <Link to="ajuda" type="link">
            Ajuda*
          </Link>
        </form>

        <div className={styles.logo}>
          <img src="./logo-edu-track.jpeg" alt="logo edu track" />
        </div>
      </div>
    </main>
  );
}
