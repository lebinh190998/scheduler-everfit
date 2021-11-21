const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export const dates = (current) => {
  let week = new Array();
  // Starting Monday not Sunday
  current.setDate(current.getDate() - current.getDay() - 6);
  for (let i = 0; i < 7; i++) {
    week.push({
      date:
        current.getDate() < 10
          ? `0${current.getDate()}`
          : `${current.getDate()}`,
      day: dayOfWeek[current.getDay()],
    });
    current.setDate(current.getDate() + 1);
  }
  return week;
};

export const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + '...' : str;
};
