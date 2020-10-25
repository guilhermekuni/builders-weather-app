const INITIAL_STATE = false;

export default function loading(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@loading/SET': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
