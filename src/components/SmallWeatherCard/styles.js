import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import breakpoints from '../../styles/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: var(--minWidth);
  padding: 0 24px;
  background: #cdcd;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: var(--borderRadius);
  background: var(--white);

  & + div {
    margin-top: 40px;
  }

  ${({ isSkeleton }) => isSkeleton && css`
    padding: 0;
  `}

  ${media.lessThan(breakpoints.tiny)`
    padding: 0 12px;
  `}
`;

export const Day = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: var(--textSize);
    color: var(--textColor);
    font-weight: bold;

    ${media.lessThan(breakpoints.tiny)`
      font-size: var(--mobileTextSize);
    `}
  }
`;

export const Temperature = styled.div`
  display: flex;
  flex-direction: row;

  strong {
    font-size: var(--bigSize);
    color: var(--descriptionColor);

    ${media.lessThan(breakpoints.tiny)`
      font-size: var(--mobileBigSize);
    `}
  }

  p {
    margin-left: 8px;
    font-size: var(--textSize);
    color: var(--descriptionColor);

    ${media.lessThan(breakpoints.tiny)`
      font-size: var(--mobileTextSize);
    `}
  }
`;

export const WeatherCondition = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 100px;
    width: 100px;
  }
`;
