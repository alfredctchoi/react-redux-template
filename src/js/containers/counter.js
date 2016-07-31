import counter from '../components/counter'
import {connect} from 'react-redux'
import {increment, decrement} from '../actions/counter'

const mapStateToProps = (state) => {
  return {
    count: state.counter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(counter);