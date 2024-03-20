import { useRouteError } from "react-router-dom";

import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.pageNotFound}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
