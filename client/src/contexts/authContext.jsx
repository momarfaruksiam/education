import { createContext, useContext } from "react"

export const authUser = createContext(null)

export const useAuthUser = () => useContext(authUser)