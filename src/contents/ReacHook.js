import React, { useState, useEffect } from 'react'

const ReacHook = () => {

    const [hasError, setError] = useState(false)
    const [user, setUser] = useState({})

    // มันจะทำบ้างอย่างหลังจาก เรนเดอร์แล้วนั้นเอง
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://randomuser.me/api/')
            res.json().then(res => setUser(res)).catch(err => setError(err))
        }

        fetchData()
    },[])

    return <>
        <div>
            <span>{JSON.stringify(user)}</span>
            <hr />
            <span>Has error : {JSON.stringify(hasError)}</span>
        </div>
    </>
}

export default ReacHook
