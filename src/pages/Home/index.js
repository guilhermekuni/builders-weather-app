import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  setUserCoordinates,
  setUserCity,
} from '../../store/modules/location/actions';

import {
  getWeatherByCoords,
  getNextDaysWeatherForecast,
} from '../../services/api';

import Header from '../../components/Header';
import MainWeatherCard from '../../components/MainWeatherCard';
import SmallWeatherCard from '../../components/SmallWeatherCard';
import SmallWeatherCardSkeleton from '../../components/SmallWeatherCard/skeleton';

import * as S from './styles';

const Home = () => {
  const dispatch = useDispatch();
  const userLatitude = useSelector(state => state.location.latitude);
  const userLongitude = useSelector(state => state.location.longitude);

  const [weatherState, setWeatherState] = useState(null);
  const [nextDaysForecast, setNextDaysForecast] = useState([]);

  const firstLoadCompleted = !!weatherState && nextDaysForecast.length > 0;

  const getCurrentWeather = useCallback(
    async ({ latitude, longitude }) => {
      const { data } = await getWeatherByCoords({
        lat: latitude,
        lon: longitude,
      });

      const { weather, main, dt, name } = data;
      const { icon, description } = weather[0];

      const weatherInfo = {
        description,
        icon,
        city: name,
        unixDate: dt,
        feelsLike: main.feels_like,
        humidity: main.humidity,
        temp: main.temp,
        tempMax: main.temp_max,
        tempMin: main.temp_min,
      };

      setWeatherState(weatherInfo);
      dispatch(setUserCity({ city: name }));
    },
    [dispatch],
  );

  const getNextDaysForecast = useCallback(async (lat, lon) => {
    const { data } = await getNextDaysWeatherForecast({ lat, lon });
    const [, ...rest] = data.daily;
    const nextDays = rest.filter((day, index) => index <= 4);

    setNextDaysForecast(nextDays);
  }, []);

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
  }, [dispatch, getCurrentWeather]);

  useEffect(() => {
    if (userLatitude && userLongitude) {
      getNextDaysForecast(userLatitude, userLongitude);
    }
  }, [userLatitude, userLongitude, getNextDaysForecast]);

  return (
    <S.Container>
      <Header />
      <S.Wrapper>
        <MainWeatherCard {...weatherState} hasInfo={!!weatherState} />
        <S.NextDaysSection>
          {
            firstLoadCompleted ? nextDaysForecast.map(({ dt, weather, temp }) => (
              <SmallWeatherCard
                key={dt}
                icon={weather[0].icon}
                unixDate={dt}
                tempMax={temp.max}
                tempMin={temp.min}
              />
            )) : (
                <>
                  <SmallWeatherCardSkeleton />
                  <SmallWeatherCardSkeleton />
                  <SmallWeatherCardSkeleton />
                  <SmallWeatherCardSkeleton />
                  <SmallWeatherCardSkeleton />
                </>
              )
          }
        </S.NextDaysSection>
      </S.Wrapper>
    </S.Container>
  );
};

export default Home;
