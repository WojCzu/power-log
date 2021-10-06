import styled from 'styled-components';
import ReactModal from 'react-modal';
import { CloseButton } from 'components/atoms/CloseButton/CloseButton';

export const StyledModal = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: clamp(240px, 90vw, 500px);
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0 0 16px 16px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  transform: translate(-50%, -50%);
  outline: none;
`;

export const ModalHeading = styled.div`
  padding: 0.4em;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.purple};
  font-size: ${({ theme }) => theme.fontSize.l};
  border-bottom-right-radius: 0.8em;

  display: flex;
  align-items: center;
  transform: translateY(-1px);
  /* without this, part of the modal sticks out */
`;

export const StyledTitle = styled.span`
  margin: 0 auto;
`;

export const StyledButton = styled(CloseButton)`
  color: ${({ theme }) => theme.color.white};
  place-self: flex-end;
`;
export const StyledDescription = styled.p`
  margin: 0;
  grid-column: 1 / -1;
  place-self: start;
`;

export const Content = styled.div`
  padding: 24px 48px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;
`;
