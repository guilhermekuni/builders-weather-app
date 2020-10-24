const INITIAL_STATE = {
  latitude: 0,
  longitude: 0,
};

export default function location(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@location/SET_COORDS': {
      return action.payload;
    }
    default: {
      return INITIAL_STATE;
    }
  }
}
