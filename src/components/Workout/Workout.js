import './Workout.css';
import React, { useEffect, useState } from 'react';
import { truncate } from '../../utils';
import Exercise from '../Exercise/Exercise';
import { TiTick } from 'react-icons/ti';

//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addExercise } from '../../actions';

const Workout = ({ addExercise, name, key, provided, day: { exercises } }) => {
  const [addMode, setAddMode] = useState(false);
  const [payload, setPayload] = useState({
    name: '',
    information: '',
    set: '',
  });

  useEffect(() => {}, [exercises]);

  const onChangePayload = (e) => {
    console.log({
      ...payload,
      [`${e.target.name}`]: e.target.value,
    });
    setPayload({
      ...payload,
      [`${e.target.name}`]: e.target.value,
    });
    console.log(payload);
  };

  const onAddExercise = () => {
    addExercise(payload);
    setAddMode(false);
  };

  const handleAdd = () => {
    setAddMode(true);
  };

  const cancelAdd = () => {
    setAddMode(false);
  };

  return (
    <li
      key={key}
      className='workout-container'
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
    >
      <div className='workout-title'>
        <b>{truncate(name, 18)}</b>
      </div>
      {exercises?.map((data) => (
        <Exercise {...data} />
      ))}
      {addMode ? (
        <>
          <div className='exercise-container'>
            <div className='exercise-title'>
              <input
                type='text'
                style={{ width: '50%' }}
                name='name'
                value={payload.name}
                placeholder='Name'
                onChange={onChangePayload}
              />
            </div>
            <div className='exercise-content'>
              <div className='exercise-text'>
                <input
                  type='text'
                  style={{ width: '25%' }}
                  name='set'
                  placeholder='Set'
                  value={payload.set}
                  onChange={onChangePayload}
                />{' '}
                <b>x</b>
              </div>
              <div className='exercise-text'>
                <input
                  type='text'
                  style={{ width: '88%' }}
                  placeholder='Information'
                  name='information'
                  value={payload.information}
                  onChange={onChangePayload}
                />
              </div>
            </div>
          </div>
          <div className='btn-container'>
            <button onClick={cancelAdd} className='btn'>
              <b>x</b>
            </button>
            <button onClick={onAddExercise} className='btn'>
              <TiTick />
            </button>
          </div>
        </>
      ) : (
        <button onClick={handleAdd} className='add-btn'>
          <b>+</b>
        </button>
      )}
    </li>
  );
};

Workout.propTypes = {
  day: PropTypes.object.isRequired,
  addExercise: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  day: state.day,
});

export default React.memo(connect(mapStateToProps, { addExercise })(Workout));
