import { useState } from 'react'
import axios from 'axios'
import styles from '../../styles/MovieDetail.module.css'
import Modal from '../../src/components/modal'
import PosterComp from '../../src/components/poster'
import Bullet from '../../src/components/bullet'
import NameList from '../../src/components/namelist'
import Footer from '../../src/components/footer'

export default function MoviePage ({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const { Title, Year, Rated, Runtime, Poster, Genre, Plot, Director, Actors, imdbRating } = movie
  const genres = Genre.split(', ')
  const directors = Director.split(', ')
  const actorList = Actors.split(', ')

  return (
    <div className={styles.container}>
      <div id="modal-root"></div>
      <main className={styles.main}>
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        >
          <PosterComp
            src={Poster}
            alt={Title}
            width={530}
            height={700}
          />
        </Modal>

        <div className={styles.innerContainer}>
          <h1 className={styles.title}>{Title}</h1>
          <div className={styles.rowContainer}>
            <p className={styles.item}>{Year} &bull;</p>
            <p className={styles.item}>{Rated} &bull;</p>
            <p className={styles.item}>{Runtime}</p>
          </div>
          <div className={styles.rowContainer}>
            <a onClick={() => setShowModal(true)}>
              <PosterComp
                src={Poster}
                alt={Title}
                width={285}
                height={420}
              />
            </a>
            <div className={styles.movieInfo}>
              <h4>IMDB Rating {imdbRating}/10</h4>
              <div className={styles.rowContainer}>
                {genres.map(gen => (<Bullet key={gen}>{gen}</Bullet>))}
              </div>
              <p className={styles.plot}>{Plot}</p>
              <div className={styles.rowWrapper}>
                <h4>Directors</h4>
                <NameList names={directors} />
              </div>
              <div className={styles.rowWrapper}>
                <h4>Stars</h4>
                <NameList names={actorList} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
  try {
    const result = await axios.get(`http://localhost:3000/api/movie/${params.movieId}`);

    return {
      props: { movie: result.data.data }
    };
  } catch {
    return {
      notFound: true
    }
  }
}
