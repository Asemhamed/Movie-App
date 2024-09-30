import React from 'react'
import { Col } from 'react-bootstrap'
import image from "./OIP.jpeg";
import { Link, useParams } from 'react-router-dom';


const CardMovie = ({ movie }) => {
  return (
    <Col className="my-1" xs="6" ms="6" md="4" lg="3">
      <Link to={`/movie/${movie.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
            className="card-image"
          />
          <div className="card-overlay">
            <div className="overley-text text-center w-100 p-2">
              <p>اسم الفيلم:{movie.title}</p>
              <p>تاريخ الاصدار:{movie.release_date}</p>
              <p>عدد المقيمين:{movie.vote_count}</p>
              <p>التقييم:{movie.vote_average}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CardMovie