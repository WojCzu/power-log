import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import ExerciseSet from 'components/molecules/ExerciseSet/ExerciseSet';
import { StyledButton } from './Exercise.styles';

const Exercise = () => {
  const [inputFields, setInputFields] = useState([
    { id: uuid(), weight: '', volume: '' },
  ]);

  const handleAddSet = () => {
    setInputFields([...inputFields, { id: uuid(), weight: '', volume: '' }]);
  };

  const handleDeleteSet = (idToDelete) => {
    const values = [...inputFields];
    const filteredValues = values.filter(({ id }) => id !== idToDelete);
    setInputFields(filteredValues);
  };

  return (
    <>
      {inputFields.map(({ id, weight, volume }, index) => {
        return (
          <ExerciseSet
            key={id}
            setNumber={index + 1}
            weight={weight}
            onWeightChange={() => console.log(123)}
            volume={volume}
            onVolumeChange={() => console.log(123)}
            volumeType="reps"
            handleDeleteSet={() => handleDeleteSet(id)}
          />
        );
      })}
      <StyledButton isFullWidth type="button" onClick={handleAddSet}>
        add set
      </StyledButton>
    </>
  );
};

export default Exercise;
