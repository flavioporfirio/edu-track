/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import styles from "./TelaLogin.module.css";

export default function TelaLogin({
  ra,
  password,
  user,
  onHandleRA,
  onHandlePassword,
}) {
  const navigate = useNavigate();

  function handleLogin() {
    console.log(ra, user.ra, user.password, password);
    if (user.ra == ra && user.password == password) {
      navigate("pesquisarAlunos");
    }
  }

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
              value={ra}
              onChange={(e) => onHandleRA(e.target.value)}
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => onHandlePassword(e.target.value)}
            />
            {}
          </div>
          <div className={styles.createAccount}>
            <Link to="cadastro" type="link">
              Cadastrar professor
            </Link>
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
