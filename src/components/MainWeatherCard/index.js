import React from 'react';
import PropTypes from 'prop-types';

import {
  formatBigTemperature,
  formatTemperature,
} from '../../utils/temperatureHelper';

import {
  convertUnixToLongDate,
  converUnixToWeekDay,
} from '../../utils/dateHelper';

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
  const weekDay = unixDate && converUnixToWeekDay(unixDate);

  const temperatureFormatted = temp && formatBigTemperature(temp);
  const tempMaxFormatted = tempMax && formatTemperature(tempMax, 'C');
  const tempMinFormatted = tempMin && formatTemperature(tempMin, 'C');
  const tempFeelsLikeFormmated =
    feelsLike && `sensação de ${formatTemperature(feelsLike, 'C')}`;

  return (
    <S.Wrapper>
      <S.MainSection>
        <S.TitleSection>
          <h1>{formattedDate}</h1>
          <h2>Araraquara, {weekDay}</h2>
        </S.TitleSection>

        <S.WeatherSection>
          <S.Temperature>
            <IconWeather iconCode={icon} size={4} />
            <p>{temperatureFormatted}</p>
          </S.Temperature>
          <S.WeatherDescription>{description}</S.WeatherDescription>
          <S.TemperatureFeelsLike>
            {tempFeelsLikeFormmated}
          </S.TemperatureFeelsLike>
        </S.WeatherSection>
      </S.MainSection>

      <S.InfoSection>
        <S.InfoItem>
          <strong>máx.</strong>
          <p>{tempMaxFormatted}</p>
        </S.InfoItem>
        <S.InfoItem>
          <strong>mín.</strong>
          <p>{tempMinFormatted}</p>
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

MainWeatherCard.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.string,
  unixDate: PropTypes.number,
  feelsLike: PropTypes.number,
  humidity: PropTypes.number,
  temp: PropTypes.number,
  tempMax: PropTypes.number,
  tempMin: PropTypes.number,
};

MainWeatherCard.defaultProps = {
  description: null,
  icon: null,
  unixDate: null,
  feelsLike: null,
  humidity: null,
  temp: null,
  tempMax: null,
  tempMin: null,
};

export default MainWeatherCard;
