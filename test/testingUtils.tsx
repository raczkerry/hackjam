import initialState from '../src/redux/initialState'
import React from 'react'
import rootReducer from '../src/redux/reducers'
import { createStore } from 'redux'
import { IGlobalState } from '../src/types'
import { Provider as ReduxProvider } from 'react-redux'
import 'jest-enzyme'

export const Provider = ({ children, state = initialState }: { children: JSX.Element; state: IGlobalState }) => {
  const store = createStore(rootReducer, state)

  return <ReduxProvider store={store}>{children}</ReduxProvider>
}
