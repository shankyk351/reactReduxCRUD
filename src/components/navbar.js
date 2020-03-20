import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    // NavbarBrand,
    // NavItem,
    // NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    NavbarText
  } from 'reactstrap';
import { Link } from 'react-router-dom';

class AppNavbar extends Component {

    state = { 
        isOpen: false
    }
    // constructor(props) {
    //     super(props);
    //     this.state = { 
    //         isOpen: false
    //      }
    // }

    toggle =()=>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() { 
        const {isOpen} = this.state;
        return ( 
            <>
                <Navbar color="dark" dark expand="sm">
                    <Link className="text-white f-20" to="/">ReactReduxCRUD</Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {/* <NavItem>
                            <Link href="/components/">Github</Link>
                        </NavItem> */}
                        {/* <NavItem>
                            <NavLink href="/">GitHub</NavLink>
                        </NavItem> */}
                        {/* <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                Option 1
                                </DropdownItem>
                                <DropdownItem>
                                Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown> */}
                    </Nav>
                    <NavbarText>
                        <Link to="/login" className="btn btn-sm btn-primary mr-2">Login</Link>
                        <Link to="/register" className="btn btn-sm btn-primary mr-2">Register</Link>
                        <Link to="/" className="btn btn-sm btn-danger">Logout</Link>
                    </NavbarText>
                    </Collapse>
                </Navbar>
            </>
         );
    }
}
 
export default AppNavbar;