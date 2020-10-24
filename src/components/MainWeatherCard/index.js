import React from 'react';

import { convertUnixToLongDate } from '../../utils/helper';

import IconWeather from '../IconWeather';

import * as S from './styles';

const MainWeatherCard = ({
  description,
  icon,
  unixDate,
  feelsLike,
  humidity,
  temp,
  tempMax,
  tempMin,
}) => {
  const formattedDate = unixDate && convertUnixToLongDate(unixDate);

  return (
    <S.Wrapper>
      <S.MainSection>
        <S.TitleSection>
          <h1>{formattedDate}</h1>
          <h2>Araraquara, sexta-feira</h2>
        </S.TitleSection>
        <S.WeatherSection>
          <S.Temperature>
            <IconWeather iconCode={icon} size={4} />
            <p>
              {temp}
              <span>
                <code>&deg;</code>C
              </span>
            </p>
          </S.Temperature>
          <S.WeatherDescription>{description}</S.WeatherDescription>
          <S.TemperatureFeelsLike>
            sensação de {feelsLike}
            <code>&deg;</code>C
          </S.TemperatureFeelsLike>
        </S.WeatherSection>
      </S.MainSection>
      <S.InfoSection>
        <S.InfoItem>
          <strong>máx.</strong>
          <p>
            {tempMax}
            <code>&deg;</code>C
          </p>
        </S.InfoItem>
        <S.InfoItem>
          <strong>mín.</strong>
          <p>
            {tempMin}
            <code>&deg;</code>C
          </p>
        </S.InfoItem>
        <S.InfoItem>
          <strong>vento</strong>
          <p>12 km/h</p>
        </S.InfoItem>
        <S.InfoItem>
          <strong>humidade</strong>
          <p>{humidity}%</p>
        </S.InfoItem>
      </S.InfoSection>
    </S.Wrapper>
  );
};

export default MainWeatherCard;
