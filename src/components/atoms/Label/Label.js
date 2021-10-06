import styled from 'styled-components';

const Label = styled.label`
  font-size: ${({ isBig, theme }) =>
    isBig ? theme.fontSize.m : theme.fontSize.s};

  font-weight: ${({ isBig, theme }) =>
    isBig ? theme.fontWeight.normal : theme.fontWeight.light};
  color: ${({ theme }) => theme.color.black};
`;

export default Label;
