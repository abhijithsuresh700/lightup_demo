import { useState } from 'react';
import Logo from '../../assets/logo/lightup.png';
import Icon from '../../assets/logo/lightup.png';
import { SideNavItems } from '../../constants/SideNavData';
import { Outlet, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {  logout } from '@/redux/loginSlice';

const Navbar = () => {
  const [expanded, setExpanded] = useState(true);
  const [active, setActive] = useState(0);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeSideBar = (index, submenu, path) => {
    if (!expanded) setExpanded(true);

    if (expanded && submenu) setSideBarOpen(true);

    if (expanded && sideBarOpen && index === active) setSideBarOpen(false);

    if (!submenu) navigate(path);

    setActive(index);
  };

  const handleViewSideNav = () => {
    setExpanded((curr) => !curr);
    setSideBarOpen(false);
  };

  const handleLogOut = ()=>{
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <div className="flex bg-slate-200">
        <div className="h-screen select-none hidden md:flex">
          <div className={`${expanded ? 'w-72' : 'w-16'}`}>
            <aside
              className={`h-screen z-0 fixed top-0 ${
                expanded ? 'w-72' : 'w-16'
              }`}
            >
              <nav className="h-full flex flex-col bg-black border-r border-gray-700 shadow-sm">
                <div
                  className={`flex items-center justify-center h-20 border-b border-gray-700 ${
                    expanded ? 'p-6' : 'p-5'
                  }`}
                >
                  <h6
                    className={`overflow-hidden transition-all font-bold ${
                      expanded ? 'w-52' : 'w-7'
                    }`}
                  >
                    <img
                      src={expanded ? Logo : Icon}
                      className="w-full"
                      alt="logo"
                    />
                  </h6>
                </div>
                <ul className="flex-1 px-3 mt-3 flex flex-col gap-1">
                  {SideNavItems.map((navItems, idx) => (
                    <li
                      key={idx}
                      className={`
                relative py-3 px-2
                rounded-md
                transition-colors group
                bg-black
                font-normal
                cursor-pointer
                ${
                  active === idx
                    ? 'text-white bg-yellow-500'
                    : 'hover:bg-zinc-500 text-zinc-200'
                }
            `}
                      onClick={() =>
                        handleChangeSideBar(
                          idx,
                          navItems.submenu,
                          navItems?.path
                        )
                      }
                    >
                      <div className="flex items-center">
                        {navItems.icon}
                        <span
                          className={`overflow-hidden transition-all ${
                            expanded ? 'w-52 ml-3' : 'w-0 h-0'
                          }`}
                        >
                          {navItems.title}
                        </span>
                        {navItems?.subMenuItems &&
                          expanded &&
                          (active === idx ? (
                            sideBarOpen ? (
                              <MdKeyboardArrowDown />
                            ) : (
                              <MdKeyboardArrowRight />
                            )
                          ) : (
                            <MdKeyboardArrowRight />
                          ))}
                      </div>

                      {!expanded && (
                        <div
                          className={`
                        absolute left-full bottom-2 rounded-md px-2 py-1 ml-6 w-max
                        bg-indigo-100 text-indigo-800 text-sm
                        invisible -translate-x-3 transition-all
                        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                    `}
                        >
                          {navItems.title}
                        </div>
                      )}

                      {active === idx && sideBarOpen && (
                        <div
                          className={`pl-7 overflow-hidden transition-all${
                            expanded ? 'w-52 ml-3' : 'w-0'
                          }`}
                        >
                          <ul>
                            {navItems?.subMenuItems?.map((subItem, indx) => (
                              <li
                                key={indx}
                                className="text-sm py-3 cursor-pointer border-b border-slate-400 hover:bg-slate-500 rounded-sm"
                                onClick={() => navigate(subItem.path)}
                              >
                                <span className="ms-1.5">{subItem?.title}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </div>
        </div>

        <div className="w-full">
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
