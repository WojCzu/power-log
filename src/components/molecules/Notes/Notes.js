import React from 'react';
import { Wrapper, StyledTextarea } from './Notes.styles';

const Notes = () => {
  return (
    <Wrapper>
      <label htmlFor="notes"></label>
      <StyledTextarea
        rows="4"
        id="notes"
        placeholder="notes on training, technique, exercises etc..."
      />
    </Wrapper>
  );
};

export default Notes;
