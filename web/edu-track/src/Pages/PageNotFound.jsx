import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <div className={styles.pageNotFound}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Page not found 😱</i>
      </p>
    </div>
  );
}
