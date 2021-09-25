import { Button } from 'components/atoms/Button/Button';
import React, { useState } from 'react';
import styled from 'styled-components';

const AddWorkout = () => {
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  const [workoutTitle, setWorkoutTitle] = useState('');

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleTitleChange = (e) => {
    setWorkoutTitle(e.target.value);
  };

  return (
    <Wrapper>
      <div>
        <label htmlFor="starting-date">date: </label>
        <input
          type="date"
          id="starting-date"
          name="workout-start"
          value={date}
          max={today}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <label htmlFor="workout-title">title: </label>
        <input
          type="text"
          id="workout-title"
          value={workoutTitle}
          onChange={handleTitleChange}
        />
      </div>

      <details>
        <summary>Low Bar Squat</summary>
        <div>
          <div>
            <div>
              <span>set 1:</span> <input type="text" value="50" />
              <span>kg x</span> <input type="text" value="12" />{' '}
              <span>reps</span>{' '}
            </div>
            <div>
              <span>set 2:</span> <input type="text" value="50" />
              <span>kg x</span> <input type="text" value="12" />{' '}
              <span>reps</span>{' '}
            </div>
            <div>
              <span>set 3:</span> <input type="text" value="50" />
              <span>kg x</span> <input type="text" value="12" />{' '}
              <span>reps</span>{' '}
            </div>
          </div>
          <Button>add set</Button>
        </div>
      </details>
      <details>
        <summary>Bulgarian Split Squat</summary>
        <div>
          <div>
            <div>
              <span>set 1:</span> <input type="text" value="50" />
              <span>kg x</span> <input type="text" value="12" />{' '}
              <span>reps</span>{' '}
            </div>
            <div>
              <span>set 2:</span> <input type="text" value="50" />
              <span>kg x</span> <input type="text" value="12" />{' '}
              <span>reps</span>{' '}
            </div>
            <div>
              <span>set 3:</span> <input type="text" value="50" />
              <span>kg x</span> <input type="text" value="12" />{' '}
              <span>reps</span>{' '}
            </div>
          </div>
          <Button>add set</Button>
        </div>
      </details>

      <Button isPrimary>add exercise</Button>

      <details>
        <summary>notes</summary>
        <div>
          <label htmlFor="notes"></label>
          <input type="text" id="notes" value="" />
        </div>
      </details>
      <Button type="submit">end workout</Button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  margin: 0 auto;
  padding: 65px 20px 20px;
  height: 100vh;
  width: 100%;
`;
export default AddWorkout;
