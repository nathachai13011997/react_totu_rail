import React from 'react'
import ThemeContext from './ThemeContext'

// วิธีเรียกใช้งาน Context
const UserContextDamoChild1 = () => {

    return <>
        <ThemeContext.Consumer>
            {color => <div style={color}>Hello World</div>}
        </ThemeContext.Consumer>
    </>
}

export default UserContextDamoChild1
