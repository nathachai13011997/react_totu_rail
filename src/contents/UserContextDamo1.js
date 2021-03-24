import React from 'react'
import ThemeContext from './ThemeContext';
import UserContextDamoChild1 from './UserContextDamoChild1';
// import Tem

const UserContextDamo1 = () => {
    
      
    return <>
        <div>
            <ThemeContext.Provider value="red" >
                <UserContextDamoChild1 />
            </ThemeContext.Provider>
        </div>
    </>
}

export default UserContextDamo1
