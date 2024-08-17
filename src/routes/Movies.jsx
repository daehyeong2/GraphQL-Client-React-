import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      id
      title
    }
  }
`;

const Movies = () => {
  const { data, loading, error } = useQuery(ALL_MOVIES);
  if (loading) {
    return <h1>로딩 중..</h1>;
  }
  if (error) {
    return <h1>요청에 실패했습니다.</h1>;
  }
  return (
    <ul>
      {data.allMovies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Movies;
