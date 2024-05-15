/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
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
    if (user.ra == ra && user.password == password) {
      toast.success("Login realizado com sucesso");
      navigate("pesquisarAlunos");
      return;
    }
    toast.error("Erro ao encontrar o usuário");
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

            <Link to="cadastro" type="link">
              Cadastrar novo aluno
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
