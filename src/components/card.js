import { forwardRef } from 'react'
import Link from 'next/link'
import PosterComp from '../components/poster'
import styles from '../../styles/Home.module.css'

function Card({ movie }, ref) {
  return (
    <Link href={`/movie/${movie.imdbID}`} key={movie.imdbID}>
      <a className={styles.card} key={movie.imdbID} ref={ref}>
        <h2>{movie.Title} ({movie.Year})</h2>
        <PosterComp
          src={movie.Poster}
          alt={movie.Title}
          width={185}
          height={275}
        />
      </a>
    </Link>
  )
}

export default forwardRef(Card)
