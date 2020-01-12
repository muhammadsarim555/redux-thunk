const INITIAL_STATE = {
  data: null,
  newUsers: null
};

export default (state = INITIAL_STATE, action) => {
  console.log(action, "type");

  switch (action.type) {
    case "INFO":
      return {
        ...state,
        data: action.user
      };

    case "ADDDATA":
      return {
        ...state,
        newUsers: action.payload
      };

    default:
      return state;
  }
};
