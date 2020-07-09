import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MoviesListComponent from '../Components/ContentArea/Movies';

import {
  getMoviesList
} from '../Store/Actions';

const mapStateToProps = state => {
  return {
    moviesListResponse: state.moviesReducer.moviesListResponse,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetMoviesList: bindActionCreators(getMoviesList, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesListComponent);