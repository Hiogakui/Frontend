import styles from "./formCard.module.css";

export default function FormCard({title, children}:{title:any; children:any}) {
    return (
      <div className={styles.card}>
        <p className={styles.title}>{title}</p>
        {children}
      </div>
    );
  }