import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 36px;
  margin-right: 5px;
`;

export const LogoText = styled.h1`
  margin: 0;

  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.lightGray};

  span {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-transform: uppercase;
  }
`;
