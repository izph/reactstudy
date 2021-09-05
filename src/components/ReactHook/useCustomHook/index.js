import React, { useState } from 'react'
// 自定义hook
// 自定义hook，和普通的函数本质上没有区别，都是做一些函数的封装，方便使用。
// 注意的:
// 1．自定义hook，必须以use开头
// 2．自定义hook，可以使用我们这些hook(useState, useEffect.....）来封装

// 自定义简单的hook
const useCustom = (initialValue, num) => {
    let [count, setCount] = useState(initialValue)
    const add = () => {
        setCount(count + num)
    }
    return { count, add }
}

export default function UseCustomHook() {
    let { count, add } = useCustom(0, 5)
    return (
        <div>
            <h3>UseCustomHook</h3>
            <h3>{count}</h3>
            <button onClick={() => {
                add()
            }}>add</button>
        </div>
    )
}
