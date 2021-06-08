import { actions } from "../Actions";

const initState = { value: 0 };

const reducers = (state = initState, action) => {
  switch (action.type) {
    case actions.increment:
      return {
        value: state.value + 1,
      };

    case actions.decrement:
      return {
        value: state.value - 1,
      };

    default:
      return state;
  }
};

export default reducers;
