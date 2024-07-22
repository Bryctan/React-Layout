
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import { Link } from "react-router-dom";
import { useAuth } from "../modules/auth/context/AuthProvider";

function Nav() {
  const { isAuthenticated, logout } = useAuth();

  return (

    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="https://flowbite-react.com/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>

      {isAuthenticated && <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>

          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem onClick={logout}>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>}

      <NavbarCollapse>
        {!isAuthenticated && <Link to="/login">
          <NavbarLink as="div">Login</NavbarLink>
        </Link>}

        {!isAuthenticated && <Link to="/register">
          <NavbarLink as="div" >Register</NavbarLink>
        </Link>}


        {isAuthenticated && <Link to="/dashboard">
          <NavbarLink as="div" >DashBoard</NavbarLink>
        </Link>}


      </NavbarCollapse>
    </Navbar>
  );
}

export default Nav;