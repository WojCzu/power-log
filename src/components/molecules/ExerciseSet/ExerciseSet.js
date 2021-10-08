import React from 'react';
import { Wrapper, StyledSpan, StyledInfo } from './ExerciseSet.styles';
import { CloseButton } from 'components/atoms/CloseButton/CloseButton';
import Label from 'components/atoms/Label/Label';
import FormField from '../FormField/FormField';

const ExerciseSet = ({
  setNumber,
  weight,
  onWeightChange,
  volume,
  onVolumeChange,
  volumeType,
  handleDeleteSet,
}) => {
  return (
    <Wrapper>
      <Label as="span">set{setNumber}:</Label>
      <StyledInfo>
        <FormField
          label={`set${setNumber} weight`}
          id={`set${setNumber}-weight`}
          name="weight"
          isLabelHidden
          type="text"
          value={weight}
          onChange={onWeightChange}
          isTextCenter
          customWidth="64px"
        />
        <StyledSpan>kg</StyledSpan>

        <FormField
          label={`set${setNumber} ${volumeType}`}
          id={`set${setNumber}-${volumeType}`}
          name={volumeType}
          isLabelHidden
          type="text"
          value={volume}
          onChange={onVolumeChange}
          isTextCenter
          customWidth="32px"
        />
        <StyledSpan>{volumeType}</StyledSpan>
      </StyledInfo>

      <CloseButton type="button" onClick={handleDeleteSet}>
        x
      </CloseButton>
    </Wrapper>
  );
};

export default ExerciseSet;
