import React, { useState } from 'react'

export default function UseState() {
    let [count, setCount] = useState(0)
    let [objectCount, setObjectCount] = useState({ name: 'yolo', age: 18 })
    let [arr, setArr] = useState([1, 2, 3, 4])
    // 函数类型 func是函数的返回值
    let [func, setFunc] = useState(() => {
        return { num: 1, name: 'reacthook' }
    })

    return (
        <div>
            <h1>useState组件</h1>
            <h3>{count}</h3>
            <h3>名字:{objectCount.name}----- 年龄:{objectCount.age}</h3>
            <h3>{arr}</h3>
            <h3>{func.num}----{func.name}</h3>
            <button onClick={() => {
                setCount(count + 1)
            }}>setCount</button>
            <button onClick={() => {
                setObjectCount((objectCount) => {
                    // 参数objectCount获取当前状态值
                    console.log(objectCount)
                    return {
                        ...objectCount,
                        name: 'zph',
                        age: 20
                    }
                })
            }}>setObjectCount</button>
            <button onClick={() => {
                setArr((arr) => {
                    console.log(arr)
                    arr.push(5)
                    return [...arr]
                })
            }}>setArr</button>
        </div>
    )
}
