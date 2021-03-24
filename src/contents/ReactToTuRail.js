import React, { useState } from 'react'

const ReactToTuRail = ({ IsShow }) => {
    // วิธีสร้าง OBJ หลายๆตัว
    const items = [{
        id: '1',
        name: 'Item 1',
    }, {
        id: '2',
        name: 'Item 2',
    }, {
        id: '3',
        name: 'Item 3',
    }]

    // ประกาศ State
    const [count, setCount] = useState(0);

    // ประกาศฟังชั่น
    function onClick() {
        setCount(count + 1);
    }
    // ถ้า มี div มากกว่า 1 ให้ใช้ React.Fragment
    // <React.Fragment>
    //  แบบ ย่อ <>
    return <>
        <div >

            {/* การแสดงค่า State */}
            <p>Count:{count}</p>
            <button onClick={onClick} >ClickMe</button>
            {/* <hr /> */}

            {/* เงื่อนไข condition  แบบ ย่อ */}
            {IsShow ? <p>Hello word</p> : null}

            {/* เงื่อนไข เดี่ยว */}
            {IsShow && <p>Nathachai</p>}

            {/* วนลูป แบบที่ 1 */}
            {items.map((item, index) => {
                return (
                    <p key={index}>{item.name}</p>
                )
            })}
            {/*  */}

            {/* วนลูป แบบ บรรณทัดเดียว */}
            {items.map((item, index) => <li key={index}>{item.name}</li>)}
            {/*  */}

        </div>
    </>
    // แบบย่อ </> 
    // </React.Fragment>

}

export default ReactToTuRail
