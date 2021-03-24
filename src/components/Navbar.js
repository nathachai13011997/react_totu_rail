import React, { useState } from 'react'
import NavItems from './NavItems'

const Navbar = () => {
    const [NavItemAction, setNavItemAction] = useState('');

    const activeitem = (item) => {
        if (NavItemAction.length > 0) {
            document.getElementById(NavItemAction).classList.remove('action')
        }
        setNavItemAction(item, () => {
            document.getElementById(NavItemAction).classList.props('action')
        })
    }

    
    return <>
        <nav>
            <ul>
                <NavItems item="ReactTotuRail" tolink='/ReactTotuRail' activenav={activeitem}></NavItems>
                <NavItems item="ReacHook" tolink='/ReacHook' activenav={activeitem}></NavItems>
                <NavItems item="UseEffectDamo1" tolink='/UseEffectDamo1' activenav={activeitem}></NavItems>
                <NavItems item="UseEffectDamo2" tolink='/UseEffectDamo2' activenav={activeitem}></NavItems>
                <NavItems item="UseEffectDamo3" tolink='/UseEffectDamo3' activenav={activeitem}></NavItems>
                <NavItems item="UseEffectDamo4" tolink='/UseEffectDamo4' activenav={activeitem}></NavItems>
                <NavItems item="UserContextDamo1" tolink='/UserContextDamo1' activenav={activeitem}></NavItems>
            </ul>
        </nav>
    </>
}

export default Navbar
