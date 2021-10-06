import styled from 'styled-components';

export const Label = styled.label`
  font-size: ${({ isBig, theme }) =>
    isBig ? theme.fontSize.m : theme.fontSize.s};

  font-weight: ${({ isBig, theme }) =>
    isBig ? theme.fontWeight.normal : theme.fontWeight.light};
  color: ${({ theme }) => theme.color.black};
`;
