import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/UserSlice";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  let userStore = useSelector((state)=>state.user)
  let login = userStore.login
  

    let dispatch = useDispatch()
    const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = ()=>{
    dispatch(logoutUser())
    navigate('/landingPage')
  }
  return (
    // <nav className="bg-blue-600 fixed z-50 top-0 left-0 right-0 text-white shadow-md">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between items-center h-16">
    //       {/* Logo */}
    //       <div className="flex-shrink-0">
    //         <a href="/" className="text-xl font-bold">
    //           JobPortal
    //         </a>
    //       </div>

    //       {/* Links */}
    //       <div className="hidden md:flex space-x-6">
    //         <a href="/" className="hover:text-gray-200">
    //           Home
    //         </a>
    //         <a href="/jobs" className="hover:text-gray-200">
    //           Jobs
    //         </a>
    //         <a href="/companies" className="hover:text-gray-200">
    //           Companies
    //         </a>
    //       </div>

    //       {/* Login/Signup Button */}
    //       <div className="hidden md:flex">
    //       { login===false && <a
    //           href="/login"
    //           className="px-4 py-2 bg-white text-blue-600 rounded hover:bg-gray-100"
    //         >
    //           Login
    //         </a>}
    //        {login===true && <li
    //         onClick={handleLogout}
    //           href=""
    //           className="px-4 hover:bg-green-500 hover:text-white cursor-pointer list-none py-2 bg-white text-blue-600 rounded "
    //         >
    //           Logout
    //         </li>}
    //       </div>

    //       {/* Hamburger Menu */}
    //       <div className="flex md:hidden">
    //         <button
    //           onClick={() => setIsOpen(!isOpen)}
    //           className="text-white focus:outline-none"
    //         >
    //           <svg
    //             className="w-6 h-6"
    //             fill="none"
    //             stroke="currentColor"
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             {isOpen ? (
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M6 18L18 6M6 6l12 12"
    //               />
    //             ) : (
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth={2}
    //                 d="M4 6h16M4 12h16m-7 6h7"
    //               />
    //             )}
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Mobile Menu */}
    //   {isOpen && (
    //     <div className="md:hidden bg-blue-700">
    //       <a
    //         href="/"
    //         className="block px-4 py-2 text-sm hover:bg-blue-800"
    //       >
    //         Home
    //       </a>
    //       <a
    //         href="/jobs"
    //         className="block px-4 py-2 text-sm hover:bg-blue-800"
    //       >
    //         Jobs
    //       </a>
    //       <a
    //         href="/companies"
    //         className="block px-4 py-2 text-sm hover:bg-blue-800"
    //       >
    //         Companies
    //       </a>
    //     { login===false && <a
    //         href="/login"
    //         className="block px-4 py-2 text-sm bg-white text-blue-600 hover:bg-gray-100"
    //       >
    //         Login
    //       </a>}
    //     { login===true && <a
    //         href=""
    //         className="block px-4 py-2 text-sm bg-white text-blue-600 hover:bg-gray-100"
    //       >
    //         Logout
    //       </a>}
    //     </div>
    //   )}
    // </nav>

   <nav className="navbar bg-base-100 rounded-box gap-4 shadow">
  <div className="navbar-start items-center">
    <a className="link text-base-content/90 link-neutral text-xl font-semibold no-underline" href="#">
      Dream Jobs
    </a>
  </div>
  <div className="navbar-end flex items-center gap-4">
    <button className="btn btn-sm btn-text btn-circle size-[2.125rem] md:hidden">
      <span className="icon-[tabler--search] size-[1.375rem]" />
    </button>
    <label className="input-group hidden max-w-56 rounded-full md:flex">
      <span className="input-group-text">
        <span className="icon-[tabler--search] text-base-content/80 size-5" />
      </span>
      <input type="search" className="input grow rounded-e-full" placeholder="Search" />
    </label>
    <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
      <button id="dropdown-scrollable" type="button" className="dropdown-toggle flex items-center" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
        <div className="avatar">
          <div className="size-9.5 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar 1" />
          </div>
        </div>
      </button>
      <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-avatar">
        <li className="dropdown-header gap-2">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar" />
            </div>
          </div>
          <div>
            <h6 className="text-base-content/90 text-base font-semibold">John Doe</h6>
            <small className="text-base-content/50">Admin</small>
          </div>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <span className="icon-[tabler--user]" />
            My Profile
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <span className="icon-[tabler--settings]" />
            Settings
          </a>
        </li>
       {login===false && <li>
          <Link className="dropdown-item" to="/login">
            <span className="icon-[tabler--receipt-rupee]" />
           Login
          </Link>
        </li>}
       {login===false && <li>
          <Link className="dropdown-item" to="/signup">
            <span className="icon-[tabler--help-triangle]" />
            Signup
          </Link>
        </li>}
        {login===true &&<li className="dropdown-footer gap-2">
          <a onClick={handleLogout} className="btn btn-error btn-soft btn-block" href="#">
            <span className="icon-[tabler--logout]" />
            Sign out
          </a>
        </li>}
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
