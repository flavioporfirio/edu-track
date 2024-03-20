import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./TelaCadastro.module.css";

export default function TelaCadastro() {
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
            <label htmlFor="ra">Nome Completo*</label>
            <input
              type="text"
              id="ra"
              value={RA}
              onChange={(e) => setRA(e.target.value)}
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="password">E-mail*</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {}
          </div>
          <div className={styles.formField}>
            <label htmlFor="password">RA*</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {}
          </div>
          <div className={styles.formField}>
            <label htmlFor="password">Turma*</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {}
          </div>
          <div className={styles.formField}>
            <label htmlFor="password">Matéria*</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {}
          </div>
          <div className={styles.formField}>
            <label htmlFor="password">Senha</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {}
          </div>
          <div className={styles.formField}>
            <label htmlFor="password">Confirmar senha*</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {}
          </div>
        </form>

        <div className={styles.logo}>
          <div>
            <img src="./logo-edu-track.jpeg" alt="logo edu track" />
            <p>Foto de perfil</p>
          </div>
          <div>
            <p>Cadastro para:</p>
            <div>
              <button>Diretor</button>
              <button>Coordenador</button>
              <button>Professor</button>
            </div>
          </div>
          <div>
            <div className={styles.createAccount}>
              <p>Cadastrar professor</p>
              <button>Entrar</button>
            </div>
            <Link to="ajuda" type="link">
              Ajuda*
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
