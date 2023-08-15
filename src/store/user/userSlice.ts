import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface UserState {
  userRemember: {
    email: string
    rememberStatus: boolean
  }
}

const initialState: UserState = {
  userRemember: {
    email: "",
    rememberStatus: false
  },

}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserEmailRemember: (state, action: PayloadAction<string>) => {
      state.userRemember.email = action.payload
      state.userRemember.rememberStatus = action.payload ? true: false
    },
  },
})

export const { setUserEmailRemember } = userSlice.actions

export const selectCount = (state: RootState) => state.user

export default userSlice.reducer