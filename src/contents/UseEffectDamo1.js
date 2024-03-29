import React, { useState, useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";


function UseEffectDamo1() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        // ทำการดัก เมื่อ count มีการเปลี่ยนแปลงให้ทำอะไร
        // มันจะทำงานเมื่อ state เปลี่ยน
        document.title = `Current count : ${count}`
    }, [count]) // [] เท่ากับค่าว่าง มันจะถูกเรียกเพียงครั้งเดียว

    return <>
        <div>
            <h1>{count}</h1>
            <Button onClick={() => { setCount(count + 1) }}>Add</Button>
        </div>
    </>
}

export default UseEffectDamo1
