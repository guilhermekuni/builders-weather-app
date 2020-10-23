import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #fff;
  margin-top: 22px;
  height: 400px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 32px 48px;
`;

export const TitleSection = styled.section`
  h1 {
    font-size: var(--bigSize);
    color: var(--titleColor);
  }

  h2 {
    font-size: var(--subtitleSize);
    color: var(--titleColor);
  }
`;

export const WeatherSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 24px;

  p {
    font-size: var(--hugeSize);
    color: var(--titleColor);
  }
`;
