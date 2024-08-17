import { gql, useQuery } from "@apollo/client";

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
  if (error) {
    return <h1>요청에 실패했습니다.</h1>;
  }
  return (
    <ul>
      {!loading ? (
        data.allMovies.map((movie) => <li key={movie.id}>{movie.title}</li>)
      ) : (
        <h1>Loading...</h1>
      )}
    </ul>
  );
};

export default Movies;
