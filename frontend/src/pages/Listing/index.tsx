import axios from 'axios'
import { useEffect, useState } from 'react'
import MovieCard from 'components/MovieCard'
import Pagination from 'components/Pagination'
import { BASE_URL } from 'utils/requests'
import { MoviePage } from 'types/movie'

function Listing() {
  //The first hook :)
  //Hook: useState -> Keep the component state
  const [pageNumber, setPageNumber] = useState(0)

  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true
  })

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
    axios
      //getting the films and sortting then by title (can do with id too)
      .get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
      .then(response => {
        const data = response.data as MoviePage
        setPage(data)
      })
    //the use effect is observing the page number, if it changes, like has changed in "handlePageChange" to change the page :)
  }, [pageNumber])

  //the function below set the actual page of movies to another
  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber)
  }

  return (
    // that only "<></> guy is called fragment, it does not interfer in nothing :)"
    <>
      {/* calling pagination, this guy will make the pages change by the arrows */}
      <Pagination page={page} onChange={handlePageChange} />

      <div className="container">
        <div className="row">
          {/* for each movie in the list "page", the function below will renderize a movie
          em uma renderização dinâmica de coleção, cada elemento renderizado DEVE possuir um atributo key.*/}
          {page.content.map(movie => (
            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Listing
