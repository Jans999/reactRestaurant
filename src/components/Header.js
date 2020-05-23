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
            isOpen: false,
            setIsOpen: false
        }
    }

    toggle = () => {
        this.setState({setIsOpen: !this.state.isOpen})
    }

    render() {

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">FOOD</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
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
