import React, { useContext } from 'react'
import { MyContext } from './Reducer'
export default function ChildTwo() {
    let { state, dispatch } = useContext(MyContext)
    return (
        <div>
            <h3>ChildTwo</h3>
            <h3>姓名：{state.name}----年龄{state.age}</h3>
            <button onClick={() => {
                dispatch({ type: 'setName', name: "ChildTwo" })
            }}>setName</button>
            <button onClick={() => {
                dispatch({ type: 'setAge', num: 5 })
            }}>setAge加5岁</button>
        </div>
    )
}
