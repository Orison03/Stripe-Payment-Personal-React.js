import React, {useEffect,useRef} from "react";
import sublinks from "./data";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";
import { HiOutlineChevronRight } from "react-icons/hi";

function Sidebar() {
  const { isSidebarOpen, closeSidebar} = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4 className="pages">{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a href={url} key={index}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
        <h4 className="pages">Pricing</h4>
        <button className="signIn-btn-mobile">
          sign in
          <HiOutlineChevronRight
            style={{
              paddingTop: "7px",
              fontSize: "19px",
              fontWeight: "bolder",
            }}
          />{" "}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
