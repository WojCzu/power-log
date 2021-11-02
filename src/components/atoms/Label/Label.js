import styled from 'styled-components';

const Label = styled.label`
  font-size: ${({ isBig, theme }) =>
    isBig ? theme.fontSize.m : theme.fontSize.s};

  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.color.white};
`;

export default Label;
