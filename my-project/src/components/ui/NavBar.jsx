import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="navbar bg-transparent fixed z-50 flex items-center justify-between">
      <div>
        <a
          className="btn btn-ghost bg-transparent text-xl text-black"
          onClick={() => scrollToElement("top")}
        >
          HomeAI
        </a>
      </div>
      <div className="flex items-center">
        <div className="mx-2">
          <a
            href="/"
            className="text-xl text-black cursor-pointer"
            onClick={() => scrollToElement("top")}
          >
            Home
          </a>
        </div>
        <div className="mx-2">
          <Link to="/product">
            <h1 className="text-xl text-black cursor-pointer">Products</h1>
          </Link>
        </div>
        <div className="mx-2">
          <h1 className="text-xl text-black cursor-pointer">About us</h1>
        </div>
        <div className="mx-2">
          <h1 className="text-xl text-black cursor-pointer">Contacts</h1>
        </div>
        <div className="mx-2">
          <Scroll
            activeClass="active"
            to="FAQs"
            spy={true}
            smooth={true}
            offset={-260}
            duration={500}
          >
            <h1
              name="FAQs"
              className="element text-xl cursor-pointer text-black"
            >
              FAQs
            </h1>
          </Scroll>
        </div>
      </div>
      <div className="flex-none">
        <div className="btn mr-3 text-black text-xl btn-ghost">
          {!isLoggedIn && <Link to="/login">Login</Link>}
        </div>
        {isLoggedIn && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {isLoggedIn && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Profile"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={() => setIsLoggedIn(false)}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
