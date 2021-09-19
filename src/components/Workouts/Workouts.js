import React from 'react';
import styled from 'styled-components';
import Arrow from 'assets/icons/arrow.svg';

const Workouts = () => {
  return (
    <Wrapper>
      <Button>add new workout</Button>
      <WorkoutHistory>
        <Title>History</Title>
        <WorkoutList>
          <WorkoutListItem>
            <WorkoutInfo>
              <WorkoutName>Lower hyper </WorkoutName>
              <WorkoutDate>13.09.2021</WorkoutDate>
            </WorkoutInfo>
            <StyledButton />
          </WorkoutListItem>
          <WorkoutListItem>
            <WorkoutInfo>
              <WorkoutName>Lower hyper </WorkoutName>
              <WorkoutDate>13.09.2021</WorkoutDate>
            </WorkoutInfo>
            <StyledButton />
          </WorkoutListItem>
          <WorkoutListItem>
            <WorkoutInfo>
              <WorkoutName>Lower hyper </WorkoutName>
              <WorkoutDate>13.09.2021</WorkoutDate>
            </WorkoutInfo>
            <StyledButton />
          </WorkoutListItem>
          <WorkoutListItem>
            <WorkoutInfo>
              <WorkoutName>Lower hyper </WorkoutName>
              <WorkoutDate>13.09.2021</WorkoutDate>
            </WorkoutInfo>
            <StyledButton />
          </WorkoutListItem>
          <WorkoutListItem>
            <WorkoutInfo>
              <WorkoutName>Lower hyper </WorkoutName>
              <WorkoutDate>13.09.2021</WorkoutDate>
            </WorkoutInfo>
            <StyledButton />
          </WorkoutListItem>
          <WorkoutListItem>
            <WorkoutInfo>
              <WorkoutName>Lower hyper </WorkoutName>
              <WorkoutDate>13.09.2021</WorkoutDate>
            </WorkoutInfo>
            <StyledButton />
          </WorkoutListItem>
          <WorkoutListItem>
            <WorkoutInfo>
              <WorkoutName>Lower hyper </WorkoutName>
              <WorkoutDate>13.09.2021</WorkoutDate>
            </WorkoutInfo>
            <StyledButton />
          </WorkoutListItem>
          <WorkoutListItem>
            <WorkoutInfo>
              <WorkoutName>Lower hyper </WorkoutName>
              <WorkoutDate>13.09.2021</WorkoutDate>
            </WorkoutInfo>
            <StyledButton />
          </WorkoutListItem>
          <WorkoutListItem>
            <WorkoutInfo>
              <WorkoutName>Lower hyper </WorkoutName>
              <WorkoutDate>13.09.2021</WorkoutDate>
            </WorkoutInfo>
            <StyledButton />
          </WorkoutListItem>
          <WorkoutListItem>
            <WorkoutInfo>
              <WorkoutName>Lower hyper </WorkoutName>
              <WorkoutDate>13.09.2021</WorkoutDate>
            </WorkoutInfo>
            <StyledButton />
          </WorkoutListItem>
          <WorkoutListItem>
            <WorkoutInfo>
              <WorkoutName>Lower hyper </WorkoutName>
              <WorkoutDate>13.09.2021</WorkoutDate>
            </WorkoutInfo>
            <StyledButton />
          </WorkoutListItem>
          <WorkoutListItem>
            <WorkoutInfo>
              <WorkoutName>Lower hyper </WorkoutName>
              <WorkoutDate>13.09.2021</WorkoutDate>
            </WorkoutInfo>
            <StyledButton />
          </WorkoutListItem>
          <WorkoutListItem>
            <WorkoutInfo>
              <WorkoutName>Lower hyper </WorkoutName>
              <WorkoutDate>13.09.2021</WorkoutDate>
            </WorkoutInfo>
            <StyledButton />
          </WorkoutListItem>
          <WorkoutListItem>
            <WorkoutInfo>
              <WorkoutName>Lower hyper </WorkoutName>
              <WorkoutDate>13.09.2021</WorkoutDate>
            </WorkoutInfo>
            <StyledButton />
          </WorkoutListItem>
          <WorkoutListItem>
            <WorkoutInfo>
              <WorkoutName>Lower hyper </WorkoutName>
              <WorkoutDate>13.09.2021</WorkoutDate>
            </WorkoutInfo>
            <StyledButton />
          </WorkoutListItem>
        </WorkoutList>
      </WorkoutHistory>
    </Wrapper>
  );
};

const Button = styled.button`
  padding: 0.5em 1.5em;

  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.color.purple};
  color: ${({ theme }) => theme.color.lightGray};
  border-radius: 8px;
  border: none;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.darkPurple};
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 65px 20px 20px;
  height: 100vh;
  width: 100%;
  max-width: 800px;

  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 1fr;
  ${Button} {
    align-self: center;
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
const WorkoutHistory = styled.div`
  padding: 0 15px;
  overflow: auto;
  border-radius: 16px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.color.white};
`;

const WorkoutList = styled.ul`
  margin: 0;
  padding: 0 10px;
`;

const WorkoutListItem = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 45px;
  grid-gap: 8px;

  padding: 8px 0;

  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
`;

const WorkoutName = styled.span`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;

const WorkoutDate = styled.span`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const WorkoutInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  place-self: center end;
  border: none;
  background: transparent url(${Arrow}) no-repeat;
  background-size: contain;
  cursor: pointer;
`;
export default Workouts;
