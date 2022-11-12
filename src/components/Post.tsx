import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/96154699?v=4" />
          <div className={styles.authorInfo}>
            <strong>Felipe Lustosa</strong>
          </div>
        </div>
      </header>
    </article>
  );
}
