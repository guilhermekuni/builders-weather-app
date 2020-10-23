import React from 'react';

import * as S from './styles';

const SmallWeatherCard = () => {
  return (
    <S.Wrapper>
      <S.Day>
        <p>sábado,</p>
        <p>24/10</p>
      </S.Day>
      <S.Temperature>
        <strong>
          28<code>&deg;</code>C /
        </strong>
        <p>
          22<code>&deg;</code>C
        </p>
      </S.Temperature>
      <S.WeatherCondition>
        <img
          src="http://openweathermap.org/img/wn/02d@2x.png"
          alt="weather_icon"
        />
      </S.WeatherCondition>
    </S.Wrapper>
  );
};

export default SmallWeatherCard;
