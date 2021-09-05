import React, { useRef } from 'react'

// 两个功能
// （1）获取DOM元素（2）存储变量
//  useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）
//  返回的 ref 对象在组件的整个生命周期内保持不变。
export default function UseRef() {
    let inputEl = useRef(null)
    let initialValue = useRef({ value: "Hello useRef" })
    const onButtonClick = () => {
        // `current` 指向已挂载到 DOM 上的文本输入元素
        inputEl.current.focus();
    };
    return (
        <div>
            <h1>useRef</h1>
            <input type="text" ref={inputEl}></input>
            <input type="text" ref={initialValue}></input>
            <button onClick={() => {
                // console.log(inputEl) // 返回一个inputEl对象
                // console.log(inputEl.current) // input元素
                // console.log(inputEl.current.value) // 拿到input输入框的值
                initialValue.current.value = inputEl.current.value // 将input输入框的值  赋值给initialValue
                console.log(initialValue.current.value)
            }}>获取Ref</button>
            <button onClick={onButtonClick}>Focus the input</button>
        </div>
    )
}
