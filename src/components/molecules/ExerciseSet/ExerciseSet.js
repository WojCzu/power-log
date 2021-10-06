import React from 'react';
import { Wrapper, StyledSpan, StyledInfo } from './ExerciseSet.styles';
import { CloseButton } from 'components/atoms/CloseButton/CloseButton';
import Label from 'components/atoms/Label/Label';
import FormField from '../FormField/FormField';

const ExerciseSet = ({ setNumber, weight, volume, volumeType }) => {
  return (
    <Wrapper>
      <Label as="span">set{setNumber}:</Label>
      <StyledInfo>
        <FormField
          label={`set${setNumber} weight`}
          isLabelHidden
          type="text"
          value={weight}
          isTextCenter
          customWidth="64px"
        />
        <StyledSpan>kg</StyledSpan>

        <FormField
          label={`set${setNumber} ${volumeType}`}
          isLabelHidden
          type="text"
          value={volume}
          isTextCenter
          customWidth="32px"
        />
        <StyledSpan>{volumeType}</StyledSpan>
      </StyledInfo>

      <CloseButton>x</CloseButton>
    </Wrapper>
  );
};

export default ExerciseSet;
