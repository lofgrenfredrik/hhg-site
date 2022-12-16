"use client"
import PropTypes from "prop-types"
import React, { createContext, useState } from "react"

export const Context = createContext(false)

export default function ContactModalContext({ children }) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  function closeContactModal() {
    setIsContactModalOpen(false)
  }

  function openContactModal() {
    setIsContactModalOpen(true)
  }

  return (
    <Context.Provider
      value={{
        actions: {
          closeContactModal,
          openContactModal,
        },
        isContactModalOpen,
      }}
    >
      {children}
    </Context.Provider>
  )
}

ContactModalContext.propTypes = {
  children: PropTypes.node.isRequired,
}
