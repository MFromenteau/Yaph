import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import history from '../../history';
import s from './SubjectItem.css';


class SubjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjectTitle: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.cards}>
            <section className={s.row}>
              <div>
                <h1>{this.props.subjectTitle}</h1>
                <hr />
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>


              <div className={s.cardFooter}>
                <hr />
                
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
