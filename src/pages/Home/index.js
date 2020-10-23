import React from 'react';

import Header from '../../components/Header';
import MainWeatherCard from '../../components/MainWeatherCard';

import * as S from './styles';

const Home = () => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <MainWeatherCard />
        <S.Test />
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
