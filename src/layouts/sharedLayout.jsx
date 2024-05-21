import React from 'react'
import { Mynav } from '../components/Mynav'
import { Outlet } from 'react-router-dom'

export function SharedLayout() {
  return (
    <>
    <Mynav/>
    <Outlet/>
    </>
    
  )
}
