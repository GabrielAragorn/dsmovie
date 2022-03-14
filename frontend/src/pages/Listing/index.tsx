import axios from 'axios'
import MovieCard from 'components/MovieCard'
import Pagination from 'components/Pagination'
import { BASE_URL } from 'utils/requests'

//WRONG FORM
axios.get(`${BASE_URL}/movies`).then(response => {
  console.log(response.data)
})

function Listing() {
  return (
    // that only "<></> guy is called fragment, it does not interfer in nothing :)"
    <>
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
