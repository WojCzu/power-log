import styled, { css } from 'styled-components';
import Label from 'components/atoms/Label/Label';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ isColumn }) => isColumn && 'column'};
  align-items: ${({ isColumn }) => (isColumn ? 'flex-start' : 'center')};

  ${Label} {
    ${({ type }) =>
      type === 'radio'
        ? css`
            margin-left: 12px;
            order: 1;
          `
        : css`
            margin-right: 12px;
          `}

    ${({ isLabelHidden }) =>
      isLabelHidden &&
      css`
        margin: 0;
      `}
  }

  align-self: flex-start;
`;
