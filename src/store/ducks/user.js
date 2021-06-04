import axios from 'axios';

const Types = {
  GET_USER: 'user/GET_USER',
  GET_USER_SUCCESS: 'user/GET_USER_SUCCESS',
  GET_USER_ERROR: 'user/GET_USER_ERROR',
};

const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USER:
      return { ...state, isLoading: true, user: null, error: null };
    case Types.GET_USER_SUCCESS:
      return { ...state, isLoading: false, user: action.payload.user };
    case Types.GET_USER_ERROR:
      return { ...state, isLoading: false, error: action.payload.error };
    default:
      return state;
  }
};

const getUser = () => ({
  type: Types.GET_USER,
});

const getUserSuccess = (user) => ({
  type: Types.GET_USER_SUCCESS,
  payload: { user },
});

const getUserError = (error) => ({
  type: Types.GET_USER_ERROR,
  payload: { error },
});

const asyncGetUser = (user) => {
  return (dispatch) => {
    dispatch(getUser());
    return axios
      .get(`https://api.github.com/users/${user}`)
      .then((res) => dispatch(getUserSuccess(res.data)))
      .catch((error) => dispatch(getUserError(error.response.data)));
  };
};

export { asyncGetUser };
export default reducer;
