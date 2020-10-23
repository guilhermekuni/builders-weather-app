import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 24px 32px 0 0;
  height: 620px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: var(--borderRadius);
`;

export const MainSection = styled.section`
  display: flex;
  flex: 3;
  flex-direction: column;
  padding: 28px 48px;
  border-top-left-radius: var(--borderRadius);
  border-top-right-radius: var(--borderRadius);
  background: linear-gradient(
    to bottom right,
    var(--cardLinearColor1),
    var(--cardLinearColor2),
    var(--cardLinearColor3)
  );
`;

export const TitleSection = styled.section`
  h1 {
    font-size: var(--bigSize);
    color: var(--textColor);
  }

  h2 {
    font-size: var(--subtitleSize);
    color: var(--textColor);
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

    span {
      font-size: var(--bigSize);
      color: var(--textColor);
    }
  }
`;

export const WeatherDescription = styled.p`
  font-size: var(--bigSize);
  color: var(--textColor);
`;

export const TemperatureFeelsLike = styled.p`
  font-size: var(--textSize);
  color: var(--textColor);
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: row;
  height: 160px;
  padding: 20px;
  background: var(--darkBackground);
  border-bottom-left-radius: var(--borderRadius);
  border-bottom-right-radius: var(--borderRadius);

  div.row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 8px;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  strong {
    color: var(--lightTextColor);
    font-size: var(--subtitleSize);
    font-weight: bold;
  }

  p {
    color: var(--lightTextColor);
    font-size: var(--subtitleSize);
    margin-top: 12px;
  }
`;
