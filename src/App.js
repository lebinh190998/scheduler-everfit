import './App.css';
import React, { useEffect, useState } from 'react';
import { dates } from './utils';

//Components
import Day from './components/Day/Day';

//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const App = ({ day }) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    setDays(dates(new Date()));
  }, []);

  return (
    <div className='app'>
      <div className='app-container'>
        {days?.map((item) => {
          const d = new Date();
          const isToday = d.getDate() == item.date;
          return <Day dateItem={item} isToday={isToday} />;
        })}
      </div>
    </div>
  );
};

App.propTypes = {
  day: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  day: state.day,
});

export default React.memo(connect(mapStateToProps, {})(App));
