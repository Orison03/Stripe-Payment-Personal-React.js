import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const [isSubmenuOpen, setisSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [label, setLabel] = useState({ page: "", links: [] });

  const openSidebar = () => {
    setisSidebarOpen(true);
  };
  const closeSidebar = () => {
    setisSidebarOpen(false);
  };
  const openSubmenu = (text, cordinate) => {
    const portion = sublinks.find((link) => link.page === text);
    setLabel(portion);
    setLocation(cordinate);
    setisSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setisSubmenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        label,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
