import React, { useContext } from 'react'
import { MyContext } from './Reducer'
export default function ChildOne() {
    let value = useContext(MyContext)
    return (
        <div>
            <h3>ChildOne</h3>
            <h3>姓名：{value.state.name}----年龄{value.state.age}</h3>
            <button onClick={() => {
                value.dispatch({ type: 'setName', name: "ChildOne" })
            }}>setName</button>
            <button onClick={() => {
                value.dispatch({ type: 'setAge', num: 2 })
            }}>setAge加2岁</button>
        </div>
    )
}
