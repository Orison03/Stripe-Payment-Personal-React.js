import React, { useState, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(true);
  const [isSubmenuOpen, setisSubmenuOpen] = useState(true);

  const openSidebar = () => {
    setisSidebarOpen(true);
  };
  const closeSidebar = () => {
    setisSidebarOpen(false);
  };
  const openSubmenu = () => {
    setisSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setisSubmenuOpen(false);
  };
  return <AppContext.Provider value={{isSidebarOpen,isSubmenuOpen,openSidebar,closeSidebar,openSubmenu,closeSubmenu}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext)
}
