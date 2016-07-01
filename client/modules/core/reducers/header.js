const defaultState = {
  title: '',
};

const reducer = (state = defaultState, {
  title,
  type,
}) => {
  switch (type) {
    case 'SET_HEADER_TITLE':
      return {
        ...state,
        title,
      };
    default:
      return state;
  }
};

export default reducer;
