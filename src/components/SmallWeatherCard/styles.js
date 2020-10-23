import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: #cdcd;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: var(--borderRadius);
  background: var(--white);

  & + div {
    margin-top: 40px;
  }
`;

export const Day = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: var(--textSize);
    color: var(--textColor);
    font-weight: bold;
  }
`;

export const Temperature = styled.div`
  display: flex;
  flex-direction: row;

  strong {
    font-size: var(--bigSize);
    color: var(--descriptionColor);
  }

  p {
    margin-left: 8px;
    font-size: var(--textSize);
    color: var(--descriptionColor);
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
