import React, { useReducer } from 'react'
// useReducer
// 1. useReducer和redux中的Reducer是一样的，说白了Reducer就是个函数。
// 2. useReducer()是个函数，有三个参数，第一个参数reducer，第二个参数是初始值，第三个参数是init
// 3. useReducer(返回值是个数组，第一个是state，第二个是dispatch
// 4. const [state, dispatch] = useReducer(reducer，初始值);
const reducer = (state, action) => {
    switch (action.type) {
        case "setName":
            return {
                ...state,
                name: action.name
            }
        case "setAge":
            return {
                ...state,
                age: state.age + action.num
            }
        default:
            return state
    }
}
let initialValue = { name: 'yolo', age: 18 }
export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <div>
            <h3>UseReducer</h3>
            <h3>{state.name}----{state.age}</h3>
            <button onClick={() => {
                dispatch({ type: "setName", name: "zph" })
            }}>setName</button>
            <button onClick={() => {
                dispatch({ type: "setAge", num: 2 })
            }}>setAge</button>
        </div>
    )
}
