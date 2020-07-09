import React, { Fragment, useState, useEffect } from 'react';
import { Row, Col, Card, Pagination } from 'antd';
import { Link } from "react-router-dom";

import SearchBar from './SearchBar';

const { Meta } = Card;

const Movies = ({ onGetMoviesList, moviesListResponse }) => {
  const [search, setSearch] = useState('horror');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    onGetMoviesList(search, currentPage)
  }, [search, currentPage]);

  const onSearchMoviesList = (e) => {
    setSearch(e.target.value);
  }

  const changePageValue = (value) => {
    setCurrentPage(value);
  }

  return (
    <Fragment>
      <SearchBar onSearchMoviesList={onSearchMoviesList} value={search} />
      <Card className="movies-style">
        <Row>

          {
            (moviesListResponse &&
              moviesListResponse.Search &&
              moviesListResponse.Search.length > 0) &&
            moviesListResponse.Search.map((list, index) => {
              return (
                <Col span={8} key={index}>
                  <Link to={`/detail/${list.imdbID}`}>
                    <Card
                      hoverable
                      style={{ margin: "15px" }}
                      cover={<img alt="example" src={list.Poster} />}
                    >
                      <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                  </Link>

                </Col>
              )

            })
          }

          {
            (moviesListResponse &&
              moviesListResponse.Error) &&
            <h1>{moviesListResponse.Error}</h1>
          }

        </Row>
        {
          (moviesListResponse && moviesListResponse.totalResults) &&
          <Pagination defaultCurrent={currentPage} onChange={changePageValue} total={moviesListResponse.totalResults} />
        }

      </Card>
    </Fragment>

  )
}

export default Movies;