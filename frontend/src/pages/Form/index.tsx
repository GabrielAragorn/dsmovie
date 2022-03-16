import FormCard from 'components/FormCard'
import { useParams } from 'react-router-dom'

function Form() {
  const params = useParams()

  //taking the "movieId" declared in path and giving it to the form card movieId"
  return <FormCard movieId={`${params.movieId}`} />
}

export default Form
