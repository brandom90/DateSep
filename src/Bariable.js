

const splitDatesByDay = () => {
  const startDate = new Date('2023-01-01');
  const endDate = new Date('2023-01-31');
  const daysPerWeek = 2;
  const dates = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const dayLists = Array.from({ length: daysPerWeek }, () => []);

  dates.forEach(date => {
    const dayIndex = date.getDay(); // 0 (Sunday) to 6 (Saturday)
    if (dayIndex < daysPerWeek) {
      dayLists[dayIndex].push(date.getDate());
    }
  });

  return dayLists;
};

export default splitDatesByDay