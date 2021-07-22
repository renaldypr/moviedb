import styles from '../../styles/Home.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/renaldypr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          Renaldy Pratama © {new Date().getFullYear()}
        </span>
      </a>
    </footer>
  )
}
