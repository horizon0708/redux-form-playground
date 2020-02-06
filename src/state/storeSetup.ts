import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { taskReducer } from './task/reducer';
import { reducer as formReducer } from 'redux-form'


const reducer = combineReducers({
  task: taskReducer,
  form: formReducer
})


export const store = configureStore({
  reducer
})

export type RootState = ReturnType<typeof reducer>