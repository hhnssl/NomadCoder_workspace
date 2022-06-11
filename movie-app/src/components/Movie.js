// making Movie component
// broght Props from App component
import PropTypes from "prop-types";

function Movie({coverImg, title, summary, genres}) {
  return (
    <div>
      <img src={coverImg} alt={title}/>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre} {console.log(genre)}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
}


export default Movie;