import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

// วิธีเรียกใช้งาน Context
const UserContextDamoChild1 = () => {
    const { color } = useContext(ThemeContext);
    console.log("color", color);
    return <>
        <h1 style={{color:color}}>Hello World</h1>
    </>
}

export default UserContextDamoChild1
