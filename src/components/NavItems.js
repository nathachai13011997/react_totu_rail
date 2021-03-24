import React from 'react'
import { Link } from 'react-router-dom'

const NavItems = ({item, tolink, activenav}) => {
    return <>
        <li id={item}>
            <Link to={tolink} onClick={activenav} >{item}</Link>
        </li>
    </>
}

export default NavItems
