


const splitDatesByDay = ({endDate, startDate, daysPerWeek}) => {
  
  const dates = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const dayLists = Array.from({ length: daysPerWeek }, () => []);

  dates.forEach(date => {
    const dayIndex = date.getDay(); // 0 (Sunday) to 6 (Saturday), gets each day from each item in the dates array
    if (dayIndex < daysPerWeek) {
      dayLists[dayIndex].push(date.toLocaleDateString());
    }
  });

  const result = dayLists
  return (
    <div>
      {result.map((dayList, index) => (
        <div key={index}>
          {`List for Day ${index + 1}: `}
          {dayList.join(', ')}
        </div>
      ))}
    </div>
  );
};

export default splitDatesByDay