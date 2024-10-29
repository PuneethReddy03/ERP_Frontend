import React, { useState } from 'react';

const Schedule = () => {
  const [filterDay, setFilterDay] = useState('');
  const [data] = useState([
    { day: 'Monday', hours: '1-2', course: 'mswd', room: 'c017', lpts: 'p' },
    { day: 'Tuesday', hours: '1-2', course: 'Aoop', room: 'c520', lpts: 'p' },
    { day: 'Wednesday', hours: '1-2', course: 'mp', room: 'c011', lpts: 'p' },
    { day: 'Thursday', hours: '1-2', course: 'database', room: 'r017', lpts: 'p' },
    { day: 'Friday', hours: '1-2', course: 'aiml', room: 'm301', lpts: 'p' },
    { day: 'Saturday', hours: '1-2', course: 'linux', room: 'c111', lpts: 'p' },
  ]);

  const filteredData = data.filter((item) =>
    item.day.toLowerCase().includes(filterDay.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by day"
        value={filterDay}
        onChange={(e) => setFilterDay(e.target.value)}
      />
      <div>
        {filteredData.map((item, index) => (
          <div key={index} style={{ margin: '10px 0' }}>
            <strong>{item.day}</strong>: {item.hours} - {item.course} (Room: {item.room}, Type: {item.lpts})
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;