import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import breakpoints from '../../styles/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  min-width: var(--minWidth);
  flex-direction: column;
  flex: 3;
  margin-right: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: var(--borderRadius);

  ${media.lessThan(breakpoints.medium)`
    margin-right: 0;
  `}
`;

export const MainSection = styled.section`
  display: flex;
  flex: 3;
  flex-direction: column;
  padding: 28px 48px;
  border-top-left-radius: var(--borderRadius);
  border-top-right-radius: var(--borderRadius);
  background: linear-gradient(
    to top left,
    var(--cardLinearColor1),
    var(--cardLinearColor2),
    var(--cardLinearColor3)
  );

  ${({ isSkeleton }) => isSkeleton && css`
    background: var(--skeletonBackground);
  `}
`;

export const TitleSection = styled.section`
  h1 {
    font-size: var(--bigSize);
    color: var(--textColor);

    ${media.lessThan(breakpoints.tiny)`
      font-size: var(--mobileBigSize);
    `}
  }

  h2 {
    font-size: var(--textSize);
    color: var(--textColor);

    ${media.lessThan(breakpoints.tiny)`
      font-size: var(--mobileTextSize);
    `}
  }
`;

export const WeatherSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 24px;
  height: 100%;
`;

export const Temperature = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  p {
    font-size: var(--hugeSize);
    font-weight: bold;
    color: var(--textColor);

    ${media.lessThan(breakpoints.tiny)`
      font-size: var(--mobileHugeSize);
    `}

    span {
      font-size: var(--bigSize);
      color: var(--textColor);

      ${media.lessThan(breakpoints.tiny)`
        font-size: var(--mobileTextSize);
      `}
    }
  }
`;

export const WeatherDescription = styled.p`
  font-size: var(--bigSize);
  color: var(--textColor);

  ${media.lessThan(breakpoints.tiny)`
    font-size: var(--mobileBigSize);
  `}
`;

export const TemperatureFeelsLike = styled.p`
  margin-top: 16px;
  font-size: var(--smallSize);
  color: var(--textColor);

  ${media.lessThan(breakpoints.tiny)`
    font-size: var(--mobileSmallSize);
  `}
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: row;
  height: 160px;
  padding: 20px;
  background: var(--darkBackground);
  border-bottom-left-radius: var(--borderRadius);
  border-bottom-right-radius: var(--borderRadius);

  ${({ isSkeleton }) => isSkeleton && css`
    background: var(--skeletonDarkBackground);
  `}
`;

export const InfoItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  strong {
    color: var(--lightTextColor);
    font-size: var(--textSize);
    font-weight: bold;

    ${media.lessThan(breakpoints.tiny)`
      font-size: var(--mobileTextSize);
    `}
  }

  p {
    color: var(--lightTextColor);
    font-size: var(--textSize);
    margin-top: 12px;

    ${media.lessThan(breakpoints.tiny)`
      font-size: var(--mobileTextSize);
    `}
  }
`;
