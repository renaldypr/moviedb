import styles from '../../styles/Home.module.css'

export default function NameList({ names }) {
  return (
    <div className={styles.namelistWrapper}>
      {names.map((name, i) => {
        const isLast = names.length === i + 1
        return (
          <div className={styles.namelistWrapper} key={i}>
            <p key={i}>{name}</p>
            {!isLast && <h5 className={styles.circle}>&bull;</h5>}
          </div>
        )
      })}
    </div>
  )
}
