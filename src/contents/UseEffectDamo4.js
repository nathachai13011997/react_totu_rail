import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UseEffectDamo4 = () => {
    const [dataArray, setDataArray] = useState(null);

    // feedJSON
    useEffect(() => {
        console.log("test");
        axios.get('http://jsonplaceholder.typicode.com/posts').then(result => {
            const { data } = result // ให้มันมีเฉพาะ Data
            // console.log(data);
            setDataArray(data);
            // alert(JSON.stringify(data));
        }).catch(error => console.log(error.message))
    }, [])
    return <>
        <div>
            {/* <p>#Debug {JSON.stringify(dataArray)}</p> */}
            <ul>{dataArray && dataArray.map((item, index) => {
                return (<li key={index} >{item.id}. {item.title}</li>)
            })}</ul>
        </div>
    </>
}

export default UseEffectDamo4
