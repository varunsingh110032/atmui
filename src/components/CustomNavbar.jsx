import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';

const CustomNavbar = ()=> {

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
      <Navbar 
            color = "info"
            expand = "md"
            fixed = ""
            >
        <NavbarBrand href="/">ATM Machine</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="http://localhost:3000/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://localhost:3000/login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://localhost:3000/signup">
                Register
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem  href="http://localhost:3000/services">Services</DropdownItem>
                <DropdownItem  href="http://localhost:3000/create-account">Create Account</DropdownItem>
                <DropdownItem  href="http://localhost:3000/pin-change">Pin Change</DropdownItem>
                <DropdownItem  href="http://localhost:3000/balance-view">Balance View</DropdownItem>
                <DropdownItem  href="http://localhost:3000/withdraw-money">Withdraw Money</DropdownItem>
                <DropdownItem  href="http://localhost:3000/deposit-money">Deposit Money</DropdownItem>
                <DropdownItem  href="http://localhost:3000/list-of-transaction">List of Transaction</DropdownItem>
                <DropdownItem>Contact us</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>DP World</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Varun Singh</NavbarText>
        </Collapse>
      </Navbar>
    </div>


    )
}

export default CustomNavbar;