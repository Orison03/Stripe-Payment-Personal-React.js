import logo from "./images/logo.svg";
import { HiMenu, HiOutlineChevronRight } from "react-icons/hi";
import { useGlobalContext } from "./context";

function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const handleSubmenu = (e) => {
    if(!e.target.classList.contains("link-btn")){
       closeSubmenu()
    }
  }
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe-logo" className="nav-logo" />
          <button className="toggle-btn" onClick={openSidebar}>
            <HiMenu />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              solutions
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>
              resources
            </button>
          </li>
          <li>
            <button className="link-btn-last">pricing</button>
          </li>
        </ul>
        <button className="signIn-btn">
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
    </nav>
  );
}

export default Navbar;
