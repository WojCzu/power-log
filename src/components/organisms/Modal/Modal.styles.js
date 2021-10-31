import styled from 'styled-components';
import ReactModal from 'react-modal';
import IconButton from 'components/atoms/IconButton/IconButton';

export const StyledModal = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: clamp(240px, 90vw, 500px);
  background-color: ${({ theme }) => theme.color.darkGray};
  border-radius: 16px;
  transform: translate(-50%, -50%);
  outline: none;
`;

export const ModalHeading = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 1em;
  border-bottom: 2px solid ${({ theme }) => theme.color.lightGray};

  display: flex;
  align-items: center;
`;

export const StyledTitle = styled.span`
  margin: 0 auto;
`;

export const StyledButton = styled(IconButton)`
  color: ${({ theme }) => theme.color.white};
  place-self: flex-end;
`;
export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.color.white};
  margin: 0;
  grid-column: 1 / -1;
  place-self: start;
`;

export const Content = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;
`;
