import { useState, useEffect } from 'react'

const UseEffectDamo2_2 = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        // ทำการดัก เมื่อ count มีการเปลี่ยนแปลงให้ทำอะไร
        // มันจะทำงานเมื่อ state เปลี่ยน
        document.title = `Current count : ${count}`;

        return () => {
            // ตรงนี้จะทำงานก็ต่อเมื่อ component นั้นถูก delete
            document.title = "The component was just destroyed";
            // อีกกรณี คือ ทุกครั้งที่ useEffect ใหม่ถูกเรียก มันจะทำงานส่วนนี้
            console.log("Destroyed");
        }
    }, [count]) // [] เท่ากับค่าว่าง มันจะถูกเรียกเพียงครั้งเดียว

    return <>
        <div>
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Add</button>
        </div>
    </>
}

export default UseEffectDamo2_2
