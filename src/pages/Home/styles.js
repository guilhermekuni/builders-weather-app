import styled from 'styled-components';
import media from 'styled-media-query';

import breakpoints from '../../styles/breakpoints';

export const Container = styled.div`
  padding: 0 200px;

  ${media.lessThan(breakpoints.huge)`
    padding: 0 100px;
  `}

  ${media.lessThan(breakpoints.large)`
    padding: 0 25px;
  `}

  ${media.lessThan(breakpoints.medium)`
    padding: 20px 100px;
  `}

  ${media.lessThan(breakpoints.small)`
    padding: 10px 20px;
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px 0;

  ${media.lessThan(breakpoints.medium)`
    flex-direction: column;
  `}
`;

export const NextDaysSection = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding-left: 16px;

  ${media.lessThan(breakpoints.medium)`
    padding-left: 0;
    margin-top: 24px;
  `}
`;

export const Break = styled.div`
  flex: 1;
`;
