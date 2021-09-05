import React, { forwardRef, useRef, useImperativeHandle } from 'react'
// #useImperativeHandle
// useImperativeHandle 可以让你在使用ref时自定义暴露给父组件的实例值。
// 在大多数情况下，应当避免使用ref这样的命令式代码。useImperativeHandle应当与forwardRef 一起
// useImperativeHandle(ref(传递来的), () => { }, [])   函数有3个参数，第一个参数是父组件传来的ref 第二个参数是函数  第三个参数的监控

// 第二个参数是父组件传过来的ref
const Forward = forwardRef((props, parentRef) => {
    return (
        <div>
            <h3 ref={parentRef}>Forward123</h3>
            <h3>Forward456</h3>
        </div>
    )
})

const Imperative = forwardRef((props, parentRef) => {
    let inputEl = useRef()

    // 想暴露给 父组件什么东西呢？ 这个由我们自定义
    useImperativeHandle(parentRef, () => {
        return {
            name: 'yolo',
            focus: () => {
                inputEl.current.focus()
            }
        }
    })
    return (
        <div>
            <input type="text" ref={inputEl}></input>
        </div>
    )
})

export default function UseImperativeHandle() {
    let handle = useRef()
    return (
        <div>
            <Forward ref={handle}></Forward>
            <Imperative ref={handle}></Imperative>
            <button onClick={() => {
                console.log(handle)
                handle.current.focus()
            }}>获取子组件的DOM</button>
        </div>
    )
}
