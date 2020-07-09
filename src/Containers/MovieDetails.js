import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieDetailsComponent from '../Components/ContentArea/MoviesDetail';

import {
  getMoviesDetail,
} from '../Store/Actions';

const mapStateToProps = state => {
  return {
    movieDetailResponse: state.moviesReducer.movieDetailResponse
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetMovieDetail: bindActionCreators(getMoviesDetail, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsComponent);