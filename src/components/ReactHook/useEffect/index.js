import React, { useState, useEffect } from 'react'

/* 
    #useEffect
    1.componentDidMount，componentDidUpdate和componentwillUnmount
    2.副作用(DOM操作、数据请求、组件更新)
    3. useEffect为什么在组件函数内部执行?可以获取props和state，采用闭包的形式
    4.无阻塞更新
    5. useEffect(回调函数，数组(可不写)); // 数组中写上监听状态的值
    6.可以写多个useEffect() 
*/
export default function UseEffect() {
    let [count, setCount] = useState(0)
    useEffect(() => {
        // 默认第一次会执行，监听的状态发生改变也会执行
        // 第二个参数数组为空，默认监听所有useState的状态
        // 空数组[]，不监听任何状态，但是还是会执行第一次
        // [count] 监听count的状态，发生改变就出发useEffect
        //  return返回的函数相当于 执行 componentwillUnmount
        console.log(count)
        return () => {
            console.log("组件卸载了:componentwillUnmount!!!")
        }
    }, [count])
    return (
        <div>
            <h1>UseEffect组件</h1>
            <h3>{count}</h3>
            <button onClick={() => {
                setCount(count + 1)
            }}>setCount</button>
        </div>
    )
}
