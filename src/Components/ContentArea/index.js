import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MoviesList, MovieDetails } from "../../Containers"
import TvShows from "./TvShows"

const ContentArea = () => (
  <Switch>
    <Redirect exact from="/" to="/movies" />
    <Route exact path='/movies' component={MoviesList} />
    <Route exact path='/shows' component={TvShows} />
    <Route exact path='/detail/:id' component={MovieDetails} />
  </Switch>
);

export default ContentArea;