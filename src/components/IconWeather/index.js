import React from 'react';

import PropTypes from 'prop-types';

import { OPEN_WEATHER_IMG_URL } from '../../utils/env';

const IconWeather = ({ iconCode, size }) => {
  const source = `${OPEN_WEATHER_IMG_URL}/${iconCode}@${size}x.png`;
  return <img src={source} alt="weather_icon" />;
};

IconWeather.propTypes = {
  iconCode: PropTypes.string,
  size: PropTypes.number,
};

IconWeather.defaultProps = {
  iconCode: '50d',
  size: 2,
};

export default IconWeather;
