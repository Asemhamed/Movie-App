import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';

export const MovieDetails = () => {
    const movieId = useParams();
    const [movie, setMovie] = useState([]);
        const getMovie = async () => {
          const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId.id}?api_key=403542b9621d5effbd492185520b21d1&language=ar`
          );
          setMovie(res.data);
                //    console.log(res.data);
}
useEffect(()=>{
getMovie();
},[])
    return (
      <div>
        <Row className="justify-content-center">
          <Col md="12" xs="12" sm="12" className="mt-4">
            <div className="card-details d-flex align-items-center">
              <img
                src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                className="image-movie w-30"
              />
              <div className="justify-content-center text-center mx-auto">
                <p className="card-text-details border-bottom">
                  اسم الفيلم : {movie.title}
                </p>
                <p className="card-text-details border-bottom">
                  تاريخ الفيلم :{movie.release_date}
                </p>
                <p className="card-text-details border-bottom">
                  عدد المقيمين :{movie.vote_count}
                </p>
                <p className="card-text-details border-bottom">
                  التقييم: {movie.vote_average}
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="12" xs="12" sm="12" className="mt-1">
            <div className="card-story d-flex align-items-start flex-column">
              <div className="text-end p-4">
                <p className="card-text-title border-bottom">القصه :</p>
              </div>
              <div className="text-end px-2">
                <p className="card-text-story ">{movie.overview}</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            md="10"
            xs="12"
            sm="12"
            className="mt-2 d-flex justify-content-center"
          >
            <Link
              to="/"
              className="btn btn-primary mx-2"
              style={{ backgroundColor: "#b45b35", border: "none" }}
            >
              عودة للرئيسية
            </Link>

            <a
              href={movie.homepage}
              className="btn btn-primary "
              style={{ backgroundColor: "#b45b35", border: "none" }}
            >
              مشاهدة الفيلم
            </a>
          </Col>
        </Row>
      </div>
    );
}
