import React, { useEffect } from 'react';
import { Row, Col, Card } from 'antd';

const MoviesDetail = ({ onGetMovieDetail, movieDetailResponse, location }) => {

  useEffect(() => {
    const array = location.pathname.split('/');
    const id = array[array.length - 1];
    onGetMovieDetail(id);
  }, []);

  return (
    movieDetailResponse ?
      <Card>
        <Row className="movie-detail">
          <Col span={12}>
            <img alt="example" src={movieDetailResponse.Poster} />
          </Col>

          <Col span={12}>
            <Row className="detial-text">
              <Col span={24}>
                <h1>{movieDetailResponse.Title}</h1>
              </Col>
              <Col span={24}>
                <span> <strong>Release Date:</strong> {movieDetailResponse.Released}</span>
              </Col>

              <Col span={24}>
                <span> <strong>Genre:</strong> {movieDetailResponse.Genre}</span>
              </Col>

              <Col span={24}>
                <span> <strong>Actors Name:</strong> {movieDetailResponse.Actors}</span>
              </Col>

              <Col span={24}>
                <span> <strong>Run Time:</strong> {movieDetailResponse.Runtime}</span>
              </Col>

              <Col span={24}>
                <span> <strong>Language:</strong> {movieDetailResponse.Language}</span>
              </Col>

              <Col span={24}>
                <span> <strong>Country Name:</strong> {movieDetailResponse.Country}</span>
              </Col>

              <Col span={24}>
                <span> <strong>Awards:</strong> {movieDetailResponse.Awards}</span>
              </Col>

              <Col span={24}>
                <span> <strong>Description:</strong> {movieDetailResponse.Plot}</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card> : ""
  )
}

export default MoviesDetail;