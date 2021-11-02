import React from 'react';
import { Wrapper, StyledSpan, StyledInfo } from './ExerciseSet.styles';
import Label from 'components/atoms/Label/Label';
import FormField from '../FormField/FormField';
import IconButton from 'components/atoms/IconButton/IconButton';

const ExerciseSet = ({
  setNumber,
  weight,
  onWeightChange,
  volume,
  onVolumeChange,
  volumeType,
  handleDeleteSet,
  isDisabled,
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
          type="number"
          value={weight}
          onChange={onWeightChange}
          isTextCenter
          customWidth="64px"
          required
          min="0"
          max="999.75"
          step="0.25"
          isDisabled={isDisabled}
        />
        <StyledSpan>kg</StyledSpan>

        <FormField
          label={`set${setNumber} ${volumeType}`}
          id={`set${setNumber}-${volumeType}`}
          name={volumeType}
          isLabelHidden
          type="number"
          value={volume}
          onChange={onVolumeChange}
          isTextCenter
          customWidth="32px"
          required
          min="0"
          max="999"
          step="1"
          isDisabled={isDisabled}
        />
        <StyledSpan>{volumeType}</StyledSpan>
      </StyledInfo>

      {!isDisabled && (
        <IconButton icon="cross" type="button" onClick={handleDeleteSet}>
          delete set
        </IconButton>
      )}
    </Wrapper>
  );
};

export default ExerciseSet;
