import React from 'react';
import Input from 'components/atoms/Input/Input';
import { Wrapper, StyledSpan, StyledInfo } from './ExerciseSet.styles';
import { CloseButton } from 'components/atoms/CloseButton/CloseButton';
import { Label } from 'components/atoms/Label/Label';

const ExerciseSet = ({ setNumber, weight, volume, volumeType }) => {
  return (
    <Wrapper>
      <Label as="span">set{setNumber}:</Label>
      <StyledInfo>
        <Input type="text" value={weight} isTextCenter customWidth="64px" />
        <StyledSpan>kg</StyledSpan>
        <Input type="text" value={volume} isTextCenter customWidth="32px" />
        <StyledSpan>{volumeType}</StyledSpan>
      </StyledInfo>

      <CloseButton>x</CloseButton>
    </Wrapper>
  );
};

export default ExerciseSet;
