import { NavLink } from "react-router-dom";

export default function PageNav() {
  return (
    <nav>
      <div>
        <img src="X" alt="imagem do professor X" />
        <p>Nome do professor</p>
        <p>RA: 29434506</p>
      </div>

      <ul>
        <li>
          <NavLink to="/">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}
