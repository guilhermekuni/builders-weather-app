import React from 'react';

import IconWeather from '../IconWeather';

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
        <IconWeather iconCode="10d" size={2} />
      </S.WeatherCondition>
    </S.Wrapper>
  );
};

export default SmallWeatherCard;
