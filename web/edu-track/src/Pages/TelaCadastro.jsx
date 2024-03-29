import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import z from "zod";
import styles from "./TelaCadastro.module.css";

const createFormSchema = z.object({
  name: z.string().min(1, "Insira seu nome"),
  email: z.string().email("Insira um email válido"),
  ra: z.string().min(8, "RA deve conter 8 números"),
  phone: z.string(),
  message: z.string().min(1, "Insira sua mensagem"),
});

const createImg = `https://i.pravatar.cc/1000?u=${Math.floor(
  Math.random() * 10000
)}`;

/* Turma, e matéria tem que aceitar valores com virgula...

 ex:
 1ºC,1ºB
 Matematica,Portugues,Ingles

  para transformar em array e colocar no objeto
 */
export default function TelaCadastro() {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(createFormSchema),
  });

  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("");

  const name = watch("name");
  const email = watch("email");
  const ra = watch("ra");
  const turma = watch("turma");
  const materia = watch("materia");
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  async function createAccount() {
    if (password === confirmPassword) {
      await fetch(
        `http://localhost:3333/dimensao_${accountType.toLowerCase()}`,
        {
          method: "POST",
          body: JSON.stringify({
            id: crypto.randomUUID(),
            nome: name,
            email,
            ra,
            turma,
            materia,
            profileImg: createImg,
            password,
          }),
        }
      );
    }

    navigate("/");
  }

  return (
    <main className={styles.main}>
      <h1>EduTrack</h1>
      <div className={styles.container}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <h1>Criar conta </h1>
          <div className={styles.formField}>
            <label htmlFor="name">Nome Completo*</label>
            <input type="text" id="name" name="name" {...register("name")} />
          </div>
          <div className={styles.formField}>
            <label htmlFor="email">E-mail*</label>
            <input type="text" id="email" name="email" {...register("email")} />
          </div>
          <div className={styles.formField}>
            <label htmlFor="ra">RA*</label>
            <input type="text" id="ra" name="ra" {...register("ra")} />
          </div>
          <div className={styles.formField}>
            <label htmlFor="turma">Turma*</label>
            <input type="text" id="turma" name="turma" {...register("turma")} />
          </div>
          <div className={styles.formField}>
            <label htmlFor="materia">Matérias*</label>
            <input
              type="text"
              id="materia"
              name="materia"
              {...register("materia")}
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="senha">Senha*</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password")}
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="confirmaSenha">Confirmar senha*</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              {...register("confirmPassword")}
            />
          </div>
        </form>

        <div className={styles.register}>
          <div className={styles.photoContainer}>
            <img src={createImg} alt="logo edu track" />
            <p>Foto de perfil</p>
          </div>
          <div>
            <p>Cadastro para:</p>
            <div className={styles.accountType}>
              <button onClick={() => setAccountType("Diretor")}>Diretor</button>
              <button onClick={() => setAccountType("Coordenador")}>
                Coordenador
              </button>
              <button onClick={() => setAccountType("Professor")}>
                Professor
              </button>
            </div>
          </div>
          <div>
            <div className={styles.createAccount}>
              <Link to="ajuda" type="link">
                Ajuda*
              </Link>
              <div>
                <Link to="/" type="link">
                  Cancel
                </Link>
                <button
                  onClick={() => {
                    createAccount();
                  }}
                >
                  Cadastrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
