import styled from 'styled-components';

const ErrorMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};

  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.red};
`;

export default ErrorMessage;
