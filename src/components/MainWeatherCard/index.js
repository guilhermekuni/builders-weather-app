import React from 'react';

import * as S from './styles';

const MainWeatherCard = () => {
  return (
    <S.Wrapper>
      <S.TitleSection>
        <h1>Dia 23 de Outubro</h1>
        <h2>Araraquara, sexta-feira</h2>
      </S.TitleSection>
      <S.WeatherSection>
        <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="icon" />
        <p>22</p>
      </S.WeatherSection>
    </S.Wrapper>
  );
};

export default MainWeatherCard;
