import React from 'react';

import Header from '../../components/Header';
import MainWeatherCard from '../../components/MainWeatherCard';
import SmallWeatherCard from '../../components/SmallWeatherCard';

import * as S from './styles';

const Home = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <MainWeatherCard />
        <S.NextDaysSection>
          <SmallWeatherCard />
          <SmallWeatherCard />
          <SmallWeatherCard />
          <SmallWeatherCard />
        </S.NextDaysSection>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
