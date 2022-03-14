import axios from 'axios'
import { useEffect, useState } from 'react'
import MovieCard from 'components/MovieCard'
import Pagination from 'components/Pagination'
import { BASE_URL } from 'utils/requests'
import { MoviePage } from 'types/movie'
import { log } from 'console'

function Listing() {
  //The first hook :)
  //Hook: useState -> Keep the component state
  const [pageNumber, setPageNumber] = useState(0)

  /*WRONG FORM
  this way make more than one request
    axios.get(`${BASE_URL}/movies`)
    .then(response => {
      console.log(response.data)
    })*/
  useEffect(() => {
    /*CORRECT FORM
      using react hooks, we can manipulate the state to keep or change a component state
      with that way, this request will be execute only when this function is execute too 'cause it has been hooked  
      */
    //doing the request from backend
    axios.get(`${BASE_URL}/movies`).then(response => {
      const data = response.data as MoviePage
      console.log(data)

      setPageNumber(data.number)
    })
  }, [])

  return (
    // that only "<></> guy is called fragment, it does not interfer in nothing :)"
    <>
      <p>{pageNumber}</p>

      <Pagination />

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default Listing
