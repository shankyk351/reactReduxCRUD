import React, { Component } from 'react';

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
    NavbarText
  } from 'reactstrap';

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
                    <NavbarBrand href="/">ReactReduxCRUD</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink href="/">GitHub</NavLink>
                        </NavItem> */}
                        <UncontrolledDropdown nav inNavbar>
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
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                    </Collapse>
                </Navbar>
            </>
         );
    }
}
 
export default AppNavbar;