const INITIAL_STATE = {
  latitude: null,
  longitude: null,
  city: null,
};

export default function location(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@location/SET_COORDS': {
      const { latitude, longitude } = action.payload;
      return { ...state, latitude, longitude };
    }
    case '@location/SET_CITY': {
      const { city } = action.payload;
      return { ...state, city };
    }
    default: {
      return state;
    }
  }
}
