import React, { useEffect, useState } from 'react'

const UseEffectDamo3 = () => {
    const [count, setCount] = useState(0)
    const doSomeThing = () => {
        setCount(previus => previus + 1)
        // setCount(count + 1);
        console.log("Do Sume Thing")
    }

    useEffect(() => {
        const intervalId = setInterval(doSomeThing, 1000)
        return () => {
            // การเคลียค่า
            clearInterval(intervalId)
            console.log("Detroyed")
        }
    }, []) // ถ้าใส่ count ตรงนี้ มันจะทำการดักจับว่า ถ้า count มีการเปลี่ยนแปลงมันจะ เรียก useEffect แล้วเคลียค่าจะถูกเรียกด้วย จากนั้นตัว interval เก่าจะถูกทำลายไป
    return <>
        <div>
            <h1>{count}</h1>
        </div>
    </>
}

export default UseEffectDamo3
