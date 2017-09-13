import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import history from '../../history';
import s from './Vote.css';


const Arrow = ({direction, ...props}) => (
  <svg viewBox="0 0 28 12" {...props}>
    <polyline points={direction === 'up' ? "0.595,11.211 14.04,1.245 27.485,11.211" : "27.485,0.803 14.04,10.769 0.595,0.803" } />
  </svg>
)

Arrow.defaultProps = {
  direction: 'up'
}

class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: PropTypes.number.isRequired,
    };
  }

  componentDidMount() {
    this.setState({count: 30})
  }

  _getCount() {
    const counts = this.state.count.toString().split('')

    return counts.map(_count => {
      if (_count === '-') {
        return <span className={s.voteColumn}>-</span>
      }else {
          return <span className={s.voteColumn}>{parseFloat(_count)}</span>
      }
    })
  }

  render() {
    return(
      <div className={s.vote}>
        <Arrow direction="up" id="up" className={s.voteUp} onClick={() => this.setState({count: this.state.count + 1})}/>
        <div className={s.voteColumns}>
          {this._getCount()}
        </div>
        <Arrow direction="down" className={s.voteDown} onClick={() => this.setState({count: this.state.count - 1})}/>
      </div>
    )
  }
}


export default withStyles(s)(Vote);
