import React, { useState } from 'react';
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
  const [data, setData] = useState({
    weight: '',
    reps: '',
    bodyWeight: '',
    squatWeight: '',
    benchWeight: '',
    deadliftWeight: '',
    gender: 'man',
    oneRepMax: '',
    wilks: '',
  });

  const handleInputChange = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const calculateOneRepMax = (e) => {
    e.preventDefault();

    if (data.reps === '1') {
      return setData((prevData) => ({
        ...prevData,
        oneRepMax: prevData.weight,
      }));
    }

    const oneRepMax = Math.round(
      Math.max(
        data.weight * (1 + data.reps / 30),
        (100 * data.weight) / (101.3 - 2.67123 * data.reps),
        data.weight * data.reps ** 0.1
      )
    );

    return setData((prevData) => ({
      ...prevData,
      oneRepMax,
    }));
  };

  const calculateWilks = (e) => {
    e.preventDefault();

    const total = data.squatWeight + data.benchWeight + data.deadliftWeight;
    if (data.gender === 'man') {
      const wilks =
        total /
        (47.46178854 +
          8.472061379 * data.bodyWeight +
          0.07369410346 * data.bodyWeight ** 2 +
          -0.001395833811 * data.bodyWeight ** 3 +
          7.07665973070743e-6 * data.bodyWeight ** 4 +
          -1.20804336482315e-8 * data.bodyWeight ** 5);
      return setData((prevData) => ({ ...prevData, wilks }));
    }

    const wilks =
      total /
      (-125.4255398 +
        13.71219419 * data.bodyWeight +
        -0.03307250631 * data.bodyWeight ** 2 +
        -0.001050400051 * data.bodyWeight ** 3 +
        9.38773881462799e-6 * data.bodyWeight ** 4 +
        -2.3334613884954e-8 * data.bodyWeight ** 5);
    return setData((prevData) => ({ ...prevData, wilks }));
  };
  return (
    <Wrapper>
      <Accordion title={'One Rep Max'}>
        <StyledForm onSubmit={calculateOneRepMax}>
          <Label htmlFor={'weight'}>weight:</Label>
          <Input
            id={'weight'}
            name={'weight'}
            value={data.weight}
            isTextCenter
            customWidth={'64px'}
            type="number"
            placeholder={'0'}
            onChange={handleInputChange}
            required
          />
          <Label htmlFor={'reps'}>repetitions:</Label>
          <Input
            id={'reps'}
            name={'reps'}
            value={data.reps}
            isTextCenter
            customWidth={'64px'}
            type="number"
            placeholder={'0'}
            onChange={handleInputChange}
            required
          />
          <Button $isPrimary>calculate</Button>
        </StyledForm>
        {data.oneRepMax && (
          <ResultMessage>
            Your estimated one-rep max: <Result>{data.oneRepMax}kg</Result>
          </ResultMessage>
        )}
      </Accordion>

      <Accordion title={'Wilks Coefficient'}>
        <StyledForm onSubmit={calculateWilks}>
          <Label htmlFor={'bodyWeight'}>body weight:</Label>
          <Input
            id={'bodyWeight'}
            name={'bodyWeight'}
            value={data.bodyWeight}
            isTextCenter
            customWidth={'64px'}
            type="number"
            placeholder={'0'}
            onChange={handleInputChange}
            required
          />
          <Label htmlFor={'squatWeight'}>squat 1RM:</Label>
          <Input
            id={'squatWeight'}
            name={'squatWeight'}
            value={data.squatWeight}
            isTextCenter
            customWidth={'64px'}
            type="number"
            placeholder={'0'}
            onChange={handleInputChange}
            required
          />
          <Label htmlFor={'benchWeight'}>bench press 1RM:</Label>
          <Input
            id={'benchWeight'}
            name={'benchWeight'}
            value={data.benchWeight}
            isTextCenter
            customWidth={'64px'}
            type="number"
            placeholder={'0'}
            onChange={handleInputChange}
            required
          />
          <Label htmlFor={'deadliftWeight'}>deadlift 1RM:</Label>
          <Input
            id={'deadliftWeight'}
            name={'deadliftWeight'}
            value={data.deadliftWeight}
            isTextCenter
            customWidth={'64px'}
            type="number"
            placeholder={'0'}
            onChange={handleInputChange}
            required
          />
          <div onChange={handleInputChange}>
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
        {data.wilks && (
          <ResultMessage>
            Your Wilks Coefficient: <Result>{data.wilks}</Result>
          </ResultMessage>
        )}
      </Accordion>
    </Wrapper>
  );
};

export default Calculators;
