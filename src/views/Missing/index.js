// Dependencies
import React from "react";

// Styles
import styles from "./Missing.module.scss";

function Missing() {
  return (
    <main className={styles.main}>
      <section className={styles.intro} aria-label="Missing">
        <h1 className={styles.header}>404 - Page is missing</h1>
      </section>
    </main>
  );
}

export default Missing;
