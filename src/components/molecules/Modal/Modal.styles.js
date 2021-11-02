import styled from 'styled-components';
import ReactModal from 'react-modal';

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
  padding: 0.8em;
  position: relative;

  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-bottom: 2px solid ${({ theme }) => theme.color.lightGray};

  text-align: center;
`;

export const TitleButtons = styled.div`
  right: 0.8em;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 0.4em;

  position: absolute;
`;

export const Content = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
