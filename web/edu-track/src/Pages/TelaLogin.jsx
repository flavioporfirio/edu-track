import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import z from "zod";
import styles from "./TelaLogin.module.css";

const createFormSchema = z.object({
  user: z.string().min(1, "Insira seu usuário"),
  password: z.string().min(3, "Insira sua senha"),
});

export default function TelaLogin() {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(createFormSchema),
  });

  const user = watch("user");
  const password = watch("password");

  return (
    <main className={styles.main}>
      <h1>EduTrack</h1>
      <div className={styles.container}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div>
            <label htmlFor="user">Usuário</label>
            <input type="text" id="user" name="user" {...register("user")} />
            {formState.errors?.user && (
              <p className="">{formState.errors?.user.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password")}
            />
            {formState.errors?.password && (
              <p className="">{formState.errors?.password.message}</p>
            )}
          </div>
          <div className={styles.createAccount}>
            <p>Cadastrar professor</p>
            <button type="submit">Entrar</button>
          </div>
          <Link type="link">Ajuda*</Link>
        </form>

        <div className={styles.logo}>
          <img src="./logo-edu-track.jpeg" alt="logo edu track" />
        </div>
      </div>
    </main>
  );
}
