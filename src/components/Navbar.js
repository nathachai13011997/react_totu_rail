import React, { useState } from 'react'
import NavbarItem from "./NavbarItem";
import { Container, Nav, Navbar } from "react-bootstrap";
function Navbar2() {
    // const [NavItemAction, setNavItemAction] = useState('');
    // const activeitem = (item) => {
    //     // if (NavItemAction.length > 0) {
    //     //     document.getElementById(NavItemAction).classList.remove('action')
    //     // }
    //     console.log("item",document.getElementById(item));
    //     // document.getElementById(item)
    //     // setNavItemAction(item, () => {
    //     //     document.getElementById(NavItemAction).classList.props('action')
    //     // })
    // }
    return (
        <Navbar bg="primary" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <NavbarItem  to="/ReactTotuRail" value="ReactTotuRail"/>
                    <NavbarItem  to="/ReacHook" value="ReacHook" />
                    <NavbarItem  to="/UseEffectDamo1" value="UseEffectDamo1" />
                    <NavbarItem  to="/UseEffectDamo2" value="UseEffectDamo2" />
                    <NavbarItem  to="/UseEffectDamo3" value="UseEffectDamo3" />
                    <NavbarItem  to="/UseEffectDamo4" value="UseEffectDamo4" />
                    <NavbarItem  to="/UserContextDamo1" value="UserContextDamo1" />
                </Nav>
              </Container>
        </Navbar>
       
    )
}

export default Navbar2
