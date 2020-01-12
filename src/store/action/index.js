const updateData = user => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(json => {
        console.log(json, "data is here");

        dispatch({
          type: "INFO",
          user: json
        });
      });
  };
};

const addData = payload => {
  return dispatch => {
    dispatch({
      type: "ADDDATA",
      payload
    });
  };
};

export { updateData, addData };
