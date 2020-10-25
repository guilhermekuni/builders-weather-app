import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { formatTemperature } from '../../utils/temperatureHelper';
import {
  converUnixToWeekDay,
  convertUnixToShortDate,
} from '../../utils/dateHelper';

import IconWeather from '../IconWeather';

import SmallWeatherCardSkeleton from './skeleton';
import * as S from './styles';

const SmallWeatherCard = ({ icon, unixDate, tempMax, tempMin, isSkeleton }) => {
  const isLoading = useSelector(state => state.loading);

  const dateFormatted = convertUnixToShortDate(unixDate);
  const weekDay = converUnixToWeekDay(unixDate);

  const tempMaxFormatted = tempMax && formatTemperature(tempMax, 'C');
  const tempMinFormatted = tempMin && formatTemperature(tempMin, 'C');

  return (
    <>
      {
        isLoading ? <SmallWeatherCardSkeleton /> : (
          <S.Wrapper>
            <S.Day>
              <p>{weekDay},</p>
              <p>{dateFormatted}</p>
            </S.Day>
            <S.Temperature>
              <strong>{tempMaxFormatted} /</strong>
              <p>{tempMinFormatted}</p>
            </S.Temperature>
            <S.WeatherCondition>
              <IconWeather iconCode={icon} size={2} />
            </S.WeatherCondition>
          </S.Wrapper>
        )
      }
    </>
  );
};

SmallWeatherCard.propTypes = {
  icon: PropTypes.string,
  unixDate: PropTypes.number,
  tempMax: PropTypes.number,
  tempMin: PropTypes.number,
  isSkeleton: PropTypes.bool,
};

SmallWeatherCard.defaultProps = {
  icon: null,
  unixDate: null,
  tempMax: null,
  tempMin: null,
  isSkeleton: false,
};

export default SmallWeatherCard;
