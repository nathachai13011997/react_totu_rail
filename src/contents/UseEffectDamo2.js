import React, { useState } from 'react'
import UseEffectDamo2_2 from './UserEffectDamo2_2'

const UseEffectDamo2 = () => {
    const [isShow, setisShow] = useState(true)
    return <>
        <div>
            {isShow && <UseEffectDamo2_2 />}
            <button onClick={() => setisShow(false)}>Hide</button>
        </div>
    </>
}

export default UseEffectDamo2
