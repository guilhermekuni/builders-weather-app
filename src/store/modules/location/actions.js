export const setUserCoordinates = ({ latitude, longitude }) => ({
  type: '@location/SET_COORDS',
  payload: { latitude, longitude },
});

export const setUserCity = ({ city }) => ({
  type: '@location/SET_CITY',
  payload: { city },
});
