/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

export default function PageNav({ user }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.infoContainer}>
        <img src={user.profileImg} alt={`${user.nome} profile picture`} />
        <div>
          <p>{user.nome}</p>
          <p>RA: {user.ra}</p>
        </div>
      </div>

      <ul>
        <li>
          <NavLink to="/pesquisarAlunos">Pesquisar</NavLink>
        </li>
        <li>
          <NavLink to="/">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}
