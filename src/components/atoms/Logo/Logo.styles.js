import styled from 'styled-components';
import { lightOutline } from 'assets/styles/outline';

export const Wrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: fit-content;
  ${lightOutline}
`;

export const LogoImage = styled.img`
  height: 36px;
  margin-right: 5px;
`;

export const LogoText = styled.p`
  margin: 0;

  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.lightGray};

  span {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-transform: uppercase;
  }
`;
