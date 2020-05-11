const initialState = {
  data: [],
  loading: true,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA": {
      return { ...state, data: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
  }

  return state;
};
