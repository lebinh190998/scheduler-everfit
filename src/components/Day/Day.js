import './Day.css';
import React, { useReducer, useCallback } from 'react';
import Workout from '../Workout/Workout';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Day = ({ day: { workouts }, isToday, dateItem: { date, day } }) => {
  const onDragEnd = useCallback((result) => {}, []);
  return (
    <div className='date-container'>
      <div className='text'>{day}</div>
      <div className={isToday ? 'date today' : 'date'}>
        <div className='text'>{date}</div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='workouts'>
            {(provided) => (
              <ul
                className='workouts'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {isToday &&
                  workouts?.map(({ id, name }, index) => (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <Workout key={id} name={name} provided={provided} />
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

Day.propTypes = {
  day: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  day: state.day,
});

export default React.memo(connect(mapStateToProps, {})(Day));
