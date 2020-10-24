import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setUserCoordinates } from '../../store/modules/location/actions';

import Header from '../../components/Header';
import MainWeatherCard from '../../components/MainWeatherCard';
import SmallWeatherCard from '../../components/SmallWeatherCard';

import * as S from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const teste = useSelector(state => state.location);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(console.log, console.log);
    dispatch(setUserCoordinates({ latitude: 123, longitude: 321 }));
  }, []);

  useEffect(() => {
    console.log({ teste });
  }, [teste]);

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
