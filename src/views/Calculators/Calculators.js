import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import FormField from 'components/molecules/FormField/FormField';
import Accordion from 'components/organisms/Accordion/Accordion';
import {
  Wrapper,
  StyledForm,
  StyledP,
  ResultMessage,
  Result,
} from './Calculators.styles';

const Calculators = () => {
  return (
    <Wrapper>
      <Accordion title={'One Rep Max'}>
        <StyledForm>
          <Label htmlFor={'weight'}>weight:</Label>
          <Input
            id={'weight'}
            name={'weight'}
            value={0}
            isTextCenter
            customWidth={'64px'}
          />
          <Label htmlFor={'repetitions'}>repetitions:</Label>
          <Input
            id={'repetitions'}
            name={'repetitions'}
            value={0}
            isTextCenter
            customWidth={'64px'}
          />
          <Button $isPrimary>calculate</Button>
        </StyledForm>
        <ResultMessage>
          Your estimated one-rep max: <Result>50kg</Result>
        </ResultMessage>
      </Accordion>

      <Accordion title={'Wilks Coefficient'}>
        <StyledForm>
          <Label htmlFor={'bodyWeight'}>body weight:</Label>
          <Input
            id={'bodyWeight'}
            name={'bodyWeight'}
            value={0}
            isTextCenter
            customWidth={'64px'}
          />
          <Label htmlFor={'squatWeight'}>squat 1RM:</Label>
          <Input
            id={'squatWeight'}
            name={'squatWeight'}
            value={0}
            isTextCenter
            customWidth={'64px'}
          />
          <Label htmlFor={'benchWeight'}>bench press 1RM:</Label>
          <Input
            id={'benchWeight'}
            name={'benchWeight'}
            value={0}
            isTextCenter
            customWidth={'64px'}
          />
          <Label htmlFor={'deadliftWeight'}>deadlift 1RM:</Label>
          <Input
            id={'deadliftWeight'}
            name={'deadliftWeight'}
            value={0}
            isTextCenter
            customWidth={'64px'}
          />
          <div>
            <StyledP as="p">gender:</StyledP>
            <FormField
              label="man"
              type="radio"
              id="man"
              value="man"
              name="gender"
              defaultChecked
            />
            <FormField
              label="woman"
              type="radio"
              id="woman"
              value="woman"
              name="gender"
            />
          </div>
          <Button $isPrimary>calculate</Button>
        </StyledForm>
        <ResultMessage>
          Your Wilks Coefficient: <Result>200</Result>
        </ResultMessage>
      </Accordion>
    </Wrapper>
  );
};

export default Calculators;
