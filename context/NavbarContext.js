import PropTypes from "prop-types"
import React, { createContext } from "react"
import { useInView } from "react-intersection-observer"

export const Context = createContext({})
Context.displayName = "NavbarContext"

export default function NavbarContext({ children }) {
  const [topSentinelRef, topSentinelInView] = useInView({ threshold: 0, initialInView: true })
  const [bottomSentinelRef, bottomSentinelInView] = useInView({ threshold: 0 })
  return (
    <Context.Provider
      value={{
        topSentinelRef,
        topSentinelInView,
        bottomSentinelRef,
        bottomSentinelInView,
      }}
    >
      {children}
    </Context.Provider>
  )
}

NavbarContext.propTypes = {
  children: PropTypes.node.isRequired,
}
