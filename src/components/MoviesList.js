import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import Pagi from './Pagi';

const MoviesList = ({ movies, getPage,totalPages}) => {
  return (
    <Row className="mt-2">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })
      ) : (
        <h2 className="alert">لا يوجد افلام</h2>
      )}
      {movies.length > 0 ? (
        <Pagi getPage={getPage} totalPages={totalPages} />
      ) : (
        ""
      )}
    </Row>
  );
};

export default MoviesList