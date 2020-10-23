import React from 'react';

import * as S from './styles';

const MainWeatherCard = () => {
  return (
    <S.Wrapper>
      <S.MainSection>
        <S.TitleSection>
          <h1>Dia 23 de Outubro</h1>
          <h2>Araraquara, sexta-feira</h2>
        </S.TitleSection>
        <S.WeatherSection>
          <S.Temperature>
            <img
              src="http://openweathermap.org/img/wn/01d@4x.png"
              alt="weather_icon"
            />
            <p>
              22
              <span>
                <code>&deg;</code>C
              </span>
            </p>
          </S.Temperature>
          <S.WeatherDescription>algumas nuvens</S.WeatherDescription>
          <S.TemperatureFeelsLike>
            sensação de 24<code>&deg;</code>C
          </S.TemperatureFeelsLike>
        </S.WeatherSection>
      </S.MainSection>
      <S.InfoSection>
        <S.InfoItem>
          <strong>máx.</strong>
          <p>
            29<code>&deg;</code>C
          </p>
        </S.InfoItem>
        <S.InfoItem>
          <strong>mín.</strong>
          <p>
            19<code>&deg;</code>C
          </p>
        </S.InfoItem>
        <S.InfoItem>
          <strong>vento</strong>
          <p>12 km/m</p>
        </S.InfoItem>
        <S.InfoItem>
          <strong>humidade</strong>
          <p>17%</p>
        </S.InfoItem>
      </S.InfoSection>
    </S.Wrapper>
  );
};

export default MainWeatherCard;
