import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  errorMessage: null,
};

// const initialState = {
//   isLoggedIn: false,
//   errorMessage: '',
// };

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isLoggedIn = true;
      state.errorMessage = '';
      localStorage.setItem('isLoggedIn', 'true');
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.errorMessage = action.payload;
      localStorage.setItem('isLoggedIn', 'false');
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.errorMessage = '';
      localStorage.setItem('isLoggedIn', 'false');
    },
  },
});

export const { loginSuccess, loginFailure, logout } = loginSlice.actions;
export default loginSlice.reducer;
