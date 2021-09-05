import React, { useState, useCallback } from 'react'
// #useCallback
// 作用: 避免组件重复渲染，提高性能(useMemo)可以控制组件什么时候需要更新
// 同样用到缓存技术，和useMemo不同的是，
// useCallback 缓存的是个函数，是个函数就可以执行
// useCallback()有两个参数，第一个参数是个函数，第二个参数是个数组usecallback(() => 0，[可以不写])
// const callback = useCallback(() => {, []); callback是个函数，可以直接callback()执行  返回的是 缓存里的状态值
// 第二个参数为空数组 [] ，useCallback会执行，但是用的是缓存里的值
export default function UseCallback() {
    let [count, setCount] = useState(0)
    let callback = useCallback(() => {
        // console.log("useCallback")
        console.log(count)
        return { count }
    }, [])
    // callback() 调用函数之后 返回{ count }对象
    console.log(callback().count)
    return (
        <div>
            <h3>count：{count}</h3>
            <h3>callback里的状态值：{callback().count}</h3>
            <button onClick={() => {
                setCount(count + 1)

            }}>setCount</button>

        </div>
    )
}
