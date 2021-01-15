import { IGlobalState } from '../types'
import { useSelector as reduxUseSelector, TypedUseSelectorHook } from 'react-redux'

export const useSelector: TypedUseSelectorHook<IGlobalState> = reduxUseSelector
