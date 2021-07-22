import { useEffect, useState, useRef, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import Head from 'next/head'
import Card from '../src/components/card'
import Footer from '../src/components/footer'
import styles from '../styles/Home.module.css'
import { fetchMovieList } from '../src/store/actions/movieAction'
import * as types from '../src/store/types'

export default function Home() {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState('')
  const [search, setSearch] = useState('')
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()
  const { movieList, isLoading, hasMore, count } = useSelector(
    (state) => state.movieReducer, shallowEqual
  )
  const observer = useRef()
  const buttonRef = useRef()

  useEffect(() => {
    if (!search || !toggle || isLoading) return
    dispatch(
      fetchMovieList({
        page: page,
        search: search
      })
    )
  }, [dispatch, page, toggle])

  const lastMovieElementRef = useCallback(
    (node) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading, hasMore]
  )

  const handleChange = (e) => {
    setQuery(e.target.value)
    setToggle(false)
  }

  const handleSubmit = () => {
    if (!query) return
    setPage(1)
    setToggle(true)
    setSearch(query)
    setQuery('')
    dispatch({
      type: types.CLEAR_MOVIE_LIST
    })
  }

  const handleKeypress = e => {
    if (e.which === 13) {
      buttonRef.current.click()
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Movie DB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Movie DB</h1>
        <p>Your #1 source for all movies!</p>

        <div className={styles.searchBarWrapper}>
          <input
            type="text"
            onChange={handleChange}
            onKeyPress={handleKeypress}
            value={query}
            placeholder="Type your movie title" />
          <button type="button" onClick={handleSubmit} ref={buttonRef}>Search</button>
        </div>

        {(search && !!movieList.length) && (
          <h4>{`Displaying ${count} results for "${search}"`}</h4>
        )}
        <div className={styles.grid}>
          {movieList.map((movie, i) => {
            const isLastElement = movieList.length === i + 1
            return (
              <Card
                movie={movie}
                key={i}
                ref={isLastElement ? lastMovieElementRef : null}
              />
            )
          })}
        </div>
        <div>{isLoading && "Loading..."}</div>
      </main>

      <Footer />
    </div>
  )
}
