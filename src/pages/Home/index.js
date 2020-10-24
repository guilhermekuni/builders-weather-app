import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setUserCoordinates } from '../../store/modules/location/actions';

import { getWeatherByCoords } from '../../services/api';

import Header from '../../components/Header';
import MainWeatherCard from '../../components/MainWeatherCard';
import SmallWeatherCard from '../../components/SmallWeatherCard';

import * as S from './styles';

const Home = () => {
  const [weatherState, setWeatherState] = useState(null);

  const dispatch = useDispatch();

  const getCurrentWeather = async ({ latitude, longitude }) => {
    const { data } = await getWeatherByCoords({
      lat: latitude,
      lon: longitude,
    });

    const { weather, main } = data;
    const { icon, description } = weather[0];

    const weatherInfo = {
      description,
      icon,
      feelsLike: main.feels_like,
      humidity: main.humidity,
      temp: main.temp,
      tempMax: main.temp_max,
      tempMin: main.temp_min,
    };

    setWeatherState(weatherInfo);
  };

  useEffect(() => {
    const getUserCoordinates = position => {
      const { latitude, longitude } = position.coords;

      dispatch(setUserCoordinates({ latitude, longitude }));
      getCurrentWeather({ latitude, longitude });
    };

    window.navigator.geolocation.getCurrentPosition(
      getUserCoordinates,
      console.error,
    );
  }, [dispatch]);

  useEffect(() => {}, []);

  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <MainWeatherCard {...weatherState} />
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
