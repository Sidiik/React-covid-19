import React from "react";
import styles from "./loading.module.css";

function Loading() {
  return (
    <div className={styles.loading}>
      <div className="spinner-grow text-primary" role="status"></div>
    </div>
  );
}

export default Loading;
