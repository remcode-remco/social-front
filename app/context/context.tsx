'use client'
import { createContext } from 'react'
import { ContextProps } from '../typings/typings'

export const NearlyContext = createContext<ContextProps>({
  userData:null,
  setUserData: ()=>null
})