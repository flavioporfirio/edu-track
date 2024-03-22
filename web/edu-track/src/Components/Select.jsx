import styles from "./Select.module.css";

export default function Select({ disc, onHandleSubject }) {
  return (
    <select
      className={styles.selectContainer}
      aria-placeholder="Selecione a matéria"
      onChange={(e) => onHandleSubject(e.target.value)}
    >
      {disc.map((disc) => (
        <option key={disc.cod_disciplina} value={disc.nome}>
          {disc.nome}
        </option>
      ))}
    </select>
  );
}
