import { atom } from 'recoil'
import { portfolio_paths } from './constants'

export const modalState = atom({
  key: 'modalState',
  default: false,
})
export const modalContentState = atom({
  key: 'modalContentState',
  default: portfolio_paths
})
export const contactModalState = atom({
  key: 'contactModalState',
  default: false,
})