import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
  query getMovie($movieId: String!) {
    movie(id: $movieId) {
      id
      title
      small_cover_image
    }
  }
`;

const Movie = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });
  if (loading) {
    return <h1>로딩 중..</h1>;
  }
  if (error) {
    return <h1>요청에 실패했습니다.</h1>;
  }
  return <h1>{data.movie.title}</h1>;
};

export default Movie;
