import styles from '../../styles/Home.module.css'

export default function Bullet({children}) {
  return (
    <div className={styles.bullet}>
      {children}
    </div>
  )
}
