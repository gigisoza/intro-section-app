import logo from "../images/logo.svg";
import arrowDown from "../images/icon-arrow-down.svg";
import menuOpen from "../images/icon-menu.svg";

const Header = () => {
  return (
    <>
      <header className="p-5 flex items-center justify-between">
        <div>
          <img src={logo} alt="logo" />
          <nav className="navbar">
            <div>
              <button>
                Features <img src={arrowDown} />
              </button>
            </div>
            <div>
              <button>
                Company <img src={arrowDown} />
              </button>
            </div>
            <div>
              <button>Careers</button>
            </div>
            <div>
              <button>About</button>
            </div>
          </nav>
        </div>

        <div>
          <button>
            <img src={menuOpen} />
          </button>
        </div>

        <div className="hidden lg:block">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </header>
    </>
  );
};

export default Header;
