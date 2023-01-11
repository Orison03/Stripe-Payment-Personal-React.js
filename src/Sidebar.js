import React from 'react'
import {data} from "./data"
import { useGlobalContext } from './context'

function Sidebar() {
  const {isSidebarOpen,closeSidebar} = useGlobalContext()
  return (
    <aside className={`${isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}`}>Sidebar</aside>
  )
}

export default Sidebar