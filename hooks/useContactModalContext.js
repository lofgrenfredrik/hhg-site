"use client"

import { useContext } from "react"

import { Context } from "../context/ContactModalContext"

export default function useContactModalContext() {
  return useContext(Context)
}
