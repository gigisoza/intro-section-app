import logo from "../images/logo.svg";
import arrowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/icon-arrow-up.svg";
import menuOpen from "../images/icon-menu.svg";
import closeMenu from "../images/icon-close-menu.svg";
import todolist from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [openFeatures, setOpenFeatures] = useState<boolean>(false);
  const [openCompany, setOpenCompany] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleOpenFeatures = () => {
    setOpenFeatures(!openFeatures);
  };

  const handleOpenCompany = () => {
    setOpenCompany(!openCompany);
  };

  return (
    <>
      <header className="p-5 flex items-center justify-between">
        <div className="lg:flex lg:items-start lg:justify-start">
          <img src={logo} alt="logo" className="lg:mr-5" />
          <nav className={`navbar ${toggle ? "open" : ""} text-slate-400`}>
            <div className="mb-2 lg:mb-0">
              <button
                onClick={handleOpenFeatures}
                className="flex items-center justify-start"
              >
                Features
                {openFeatures ? (
                  <img src={arrowDown} className="ml-2" />
                ) : (
                  <img src={arrowUp} className="ml-2" />
                )}
              </button>
              {openFeatures && (
                <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={todolist} className="mr-2" />
                    Todo List
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={calendar} className="mr-2" />
                    Calendar
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={reminders} className="mr-2" />
                    Reminders
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    <img src={planning} className="mr-2" />
                    Planning
                  </li>
                </ul>
              )}
            </div>
            <div className="mb-2 lg:mb-0">
              <button
                onClick={handleOpenCompany}
                className="flex items-center justify-start"
              >
                Company
                {openCompany ? (
                  <img src={arrowDown} className="ml-2" />
                ) : (
                  <img src={arrowUp} className="ml-2" />
                )}
              </button>
              {openCompany && (
                <ul className="mt-2 ml-3 lg:ml-0 lg:p-3 lg:shadow">
                  <li className="flex items-center justify-start text-sm mb-2">
                    History
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    Our Team
                  </li>
                  <li className="flex items-center justify-start text-sm mb-2">
                    Blog
                  </li>
                </ul>
              )}
            </div>
            <div className="mb-2 lg:mb-0">
              <button>Careers</button>
            </div>
            <div>
              <button>About</button>
            </div>
          </nav>
        </div>

        <div className="lg:hidden">
          <button onClick={handleToggle}>
            {toggle ? <img src={closeMenu} /> : <img src={menuOpen} />}
          </button>
        </div>

        <div className="hidden lg:block">
          <button className="mr-10 opacity-75">Login</button>
          <button className="border-2 border-black opacity-75 px-6 py-2 rounded-2xl">
            Register
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
