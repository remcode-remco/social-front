'use client'
import { createContext } from 'react'
import { ContextProps, ContextPropsReplies } from '../typings/typings'

export const NearlyContext = createContext<ContextProps>({
  userData:null,
  setUserData: ()=>null
})

export const NearlyContextReplies = createContext<ContextPropsReplies>({
  showReplies:false,
  setShowReplies:()=>null
})