import styled from 'styled-components';
import ReactModal from 'react-modal';

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
