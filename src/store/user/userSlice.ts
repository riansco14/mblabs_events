import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { CityType, UserType } from '../../common/types'

interface UserState {
  userRemember: {
    email: string
    rememberStatus: boolean
  }
  userLogged?: UserType
  userCity?: CityType
}

const initialState: UserState = {
  userRemember: {
    email: "",
    rememberStatus: false
  },
  userLogged: null,
  userCity: {
    id: 0,
    city: "",
    state: ""
  }
}

interface UserLoginType{
  email: string
  password: string
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserLoginType>) => {
      const { email, password } = action.payload

      if(email === "admin@gmail.com" && password === "admin"){
        const userFakeLogged = {
          id: 1234,
          email: "admin@gmail.com",
          username: "Rian R"
        }

        state.userLogged = userFakeLogged
      }
    },
    logout: (state) => {
      state.userLogged = null
    },
    setUserEmailRemember: (state, action: PayloadAction<string>) => {
      state.userRemember.email = action.payload
      state.userRemember.rememberStatus = action.payload ? true: false
    },
    setCity: (state, action: PayloadAction<CityType>) => {
      state.userCity = action.payload
    },
  },
})

export const { login, logout, setUserEmailRemember, setCity } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer