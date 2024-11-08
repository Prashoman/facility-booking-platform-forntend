import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TUser } from '../../../components/ui/LoginPage/LoginPage'
import { RootState } from '../../store'

type TInitialState = {
    user: null | TUser,
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
      setUser : (state, action: PayloadAction<{user: TUser | null, token: string}>) => {
        state.user = action.payload.user
        state.token = action.payload.token
      },

      logOut: (state) => {
        state.user = null
        state.token = null
      }
    },
  })
  
  export const { setUser, logOut } = authSlice.actions
  export default authSlice.reducer

  export const currentUser = (state:RootState) => state.auth.user;
  export const currentToken = (state:RootState) => state.auth.token;