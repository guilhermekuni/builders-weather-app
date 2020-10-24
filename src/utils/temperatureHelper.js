import React from 'react';

export const roundNumber = number => Math.round(number);

export const formatTemperature = (temp, unit) =>
  `${roundNumber(temp)}\xB0${unit}`;

export const formatBigTemperature = (temp, unit) => (
  <>
    {roundNumber(temp)}
    <span>
      <code>&deg;</code>
      {unit}
    </span>
  </>
);
