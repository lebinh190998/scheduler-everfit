import './Exercise.css';
import React, { useEffect, useState } from 'react';
import { truncate } from '../../utils';

//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Exercise = ({ name, information, set }) => {
  return (
    <div className='exercise-container'>
      <div className='exercise-title'>
        <b>{truncate(name, 18)}</b>
      </div>
      <div className='exercise-content'>
        <div className='exercise-text'>
          <b>{`${set}x`}</b>
        </div>
        <div className='exercise-text'>{truncate(information, 20)}</div>
      </div>
    </div>
  );
};

Exercise.propTypes = {
  day: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  day: state.day,
});

export default React.memo(connect(mapStateToProps, {})(Exercise));
