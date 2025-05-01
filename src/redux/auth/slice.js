import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operations';

const initialState = {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    
    extraReducers: (builder) => {
      builder
        // Register işlemi başarılı
        .addCase(register.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        })
        // Login işlemi başarılı
        .addCase(login.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        })
        // Logout işlemi başarılı
        .addCase(logout.fulfilled, (state) => {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
        })
        // Kullanıcıyı yenileme (refresh)
        .addCase(refreshUser.pending, (state) => {
          state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isRefreshing = false;
          state.isLoggedIn = true;
        })
        .addCase(refreshUser.rejected, (state) => {
          state.isRefreshing = false;
          state.isLoggedIn = false;
        });
    },
  });

  
  export default authSlice.reducer;