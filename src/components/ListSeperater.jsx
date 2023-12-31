import React from 'react'




function ListSeperater() {
  const result = splitDatesByDay();
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
}

export default ListSeperater;