import React, { useState, useEffect, useLayoutEffect } from 'react'
// useLayoutEffect
// 和useEffect作用一样, 在组件生成过程中，可以做一些操作
// 不同
// 1．执行的时间不同, useEffect是在componentDidMount以后执行的，
// 2. useLayoutEffect在浏览器执行绘制之前执行（(会阻塞组件挂在，慎用)
// 所有的useLayoutEffect 都比 useEffect 先执行  
// 监听的状态发生改变时： useLayoutEffect返回的函数 最先执行 ——> useLayoutEffect ——> useEffect返回的函数 ——> useEffect
export default function UseLayoutEffect() {
    let [count, setCount] = useState(0)
    useLayoutEffect(() => {
        console.log('useLayoutEffect————2')
        return () => {
            console.log('组件卸载了：useLayoutEffect————1')
        }
    })
    useEffect(() => {
        console.log('useEffect————4')
        return () => {
            console.log('组件卸载了：useEffect————3')
        }
    })
    return (
        <div>
            UseLayoutEffect
            <h3>{count}</h3>
            <button onClick={() => {
                setCount(count + 1)
            }}>setCount</button>
        </div>
    )
}
