import React, { useState } from "react";
import { useGlobalContext } from "./context";
import { useEffect } from "react";
import { useRef } from "react";

const Submenu = () => {
  const { isSubmenuOpen, location, label:{page,links} } = useGlobalContext(); 
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);
return (
  <aside
    className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
    ref={container}
  >
    <h4 className="pages">{page}</h4>
    <div className={`submenu-center col-2`}>
      {links.map((link, index) => {
        const { label, icon, url } = link;
        return (
          <a href={url} key={index}>
            {icon}
            {label}
          </a>
        );
      })}
    </div>
  </aside>
);
};

export default Submenu;
