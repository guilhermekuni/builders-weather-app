export const setUserCoordinates = ({ latitude, longitude }) => ({
  type: '@location/SET_COORDS',
  payload: { latitude, longitude },
});
