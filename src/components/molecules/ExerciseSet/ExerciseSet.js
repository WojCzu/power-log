import React from 'react';
import Input from 'components/atoms/Input/Input';
import {
  Wrapper,
  StyledSetNumber,
  StyledSpan,
  StyledButton,
  StyledInfo,
} from './ExerciseSet.styles';

const ExerciseSet = ({ setNumber, weight, volume, volumeType }) => {
  return (
    <Wrapper>
      <StyledSetNumber>set{setNumber}:</StyledSetNumber>
      <StyledInfo>
        <Input type="text" value={weight} isTextCenter customWidth="64px" />
        <StyledSpan>kg</StyledSpan>
        <Input type="text" value={volume} isTextCenter customWidth="32px" />
        <StyledSpan>{volumeType}</StyledSpan>
      </StyledInfo>

      <StyledButton>x</StyledButton>
    </Wrapper>
  );
};

export default ExerciseSet;
