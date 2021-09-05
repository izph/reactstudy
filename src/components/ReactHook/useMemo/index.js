import React, { useState, useMemo, useEffect } from 'react'
// #useMemo
// 'shouldComponentUpdate`类似作用,在渲染过程中避免重复渲染的问题。当状态或者父组件传来的属性发生变化时，更新组件。
// I
// 1. useMemo 就是用的的`memoization`来提高性能的。
// 2.`Memoization`是`JavaScript`中的一种缓存技术。

// 如果我们有CPU密集型操作，我们可以通过将初始操作的结果存储在缓存中来优化使用。
// 如果操作必然会再次执行，我们将不再麻烦再次使用我们的CPU，因为相同结果的结果存储在某个地方，我们只是简单地返回结果。
// 记住这个是以空间换速度，所以最好确定你是否值得那么做，有些场景很有必要使用。

// 'useMemo()`是一个函数，有两个参数，第一个参数是个函数，第二个参数是个数组。  和useEffect类似
// 'useMemo(()=>,[默认可以不写])`
// useMemo和useEffect执行的时间不同, useEffect是在componentDidMount以后执行的，而useMemo是在组件渲染过程中执行的
// useMemo 的返回值(缓存值)可以是任意状态，数字，对象等   useCallback缓存的是一个函数（ useCallback的返回值是一个函数）

export default function UseMemo() {
    let [count, setCount] = useState(0)
    let [person, setPerson] = useState({ name: 'yolo', age: 22 })
    let data = { count, person }
    useEffect(() => {
        console.log('useEffect')

    })
    let res = useMemo(() => {
        console.log('useMemo') // 首次渲染，useMemo比useEffect先调用
        return data
    }, [count])
    console.log(res)
    return (
        <div>
            <h3>{res.count}</h3>
            <h3>姓名：{res.person.name}-----年龄:{res.person.age}</h3>
            <button onClick={() => {
                setCount(count + 1)
                console.log(count)
            }}>修改</button>
        </div>
    )
}
