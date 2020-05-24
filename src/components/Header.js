import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';



export default class Header extends Component {

    constructor() {
        super()
        this.state = {
            setIsOpen: false
        }
    }

    toggle = () => {
        this.setState(prevState => ({setIsOpen: !prevState.setIsOpen}))
    }

    render() {

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">TGI Saturday</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.setIsOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                        <NavLink href="/tableBooking">Book a table</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/menu">Menu</NavLink>
                        </NavItem>

                    </Nav>
                    </Collapse>
                </Navbar>
                </div>
        )
    }
}
