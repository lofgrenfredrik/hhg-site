import { useContext } from "react"

import { Context } from "../context/NavbarContext"

export default function useNavbarContext() {
  return useContext(Context)
}
