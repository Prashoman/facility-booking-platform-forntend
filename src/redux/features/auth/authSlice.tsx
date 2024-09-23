import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TInitialState = {
    user: null | string,
    token: null | string,
}

const initialState:TInitialState = {
    user: null,
    token: null,
}

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      login : (state, action: PayloadAction<{user: string, token: string}>) => {
        state.user = action.payload.user
        state.token = action.payload.token
      },

      logOut: (state) => {
        state.user = null
        state.token = null
      }
    },
  })
  
  export const { login, logOut } = authSlice.actions
  export default authSlice.reducer