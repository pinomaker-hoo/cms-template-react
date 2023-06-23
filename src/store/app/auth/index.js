// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    email: '',
    name: '',
    accessToken: '',
    refreshToken: '',
  },
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

export default authSlice.reducer

export const getAccessToken = (state) => state.auth.user.accessToken
