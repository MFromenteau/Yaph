import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import history from '../../history';
import s from './SubjectItem.css';
import Vote from '../Vote'


class SubjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectTitle: PropTypes.string.isRequired,
      countPros: PropTypes.number.isRequired,
      countCons: PropTypes.number.isRequired,
      subjectId: PropTypes.number.isRequired,
      subjectDesc: PropTypes.string.isRequired,
      subjectAuthor: PropTypes.string.isRequired,
      subjectScore: PropTypes.number.isRequired,
    };
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.cards}>
            <section className={s.row}>
              <div className={s.cardHeader}>
                <li>
                  <h1>{this.props.subjectTitle}</h1>
                  <p>
                    <h4>Author : </h4>
                      Pros : 150 | Cons : 150
                  </p>
                </li>
                <li className={s.cardHeaderVote}><Vote /></li>
              </div>
              <div className={s.cardDesc}>
                <hr />
                <p>
                  <h4> Description : </h4>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <hr />
              </div>


              <div className={s.cardFooter}>
                Twitter | Facebook | MySpace
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SubjectItem);
