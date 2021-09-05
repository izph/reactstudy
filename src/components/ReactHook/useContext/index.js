import React, { useContext, createContext, useState } from 'react'
// useContext是函数组件 父子组件进行传值的  一般要联合createContext一起使用
// createContext生成容器组件  在容器上挂一个属性 再传给子组件
// 在子组件再用 useContext 来接收 容器组件 传过来的 属性
// 也可以通过 props 传值
const MyContext = createContext();

const ChildOne = (props) => {
    const { num } = props;
    let value = useContext(MyContext)
    console.log(num)
    console.log(value)

    return (
        <div>
            <h3>我是子组件one</h3>
            <h3>{value.count}</h3>
        </div>
    )
}

const ChildTwo = (props) => {
    let value = useContext(MyContext)
    console.log(value)
    return (
        <div>
            <h3>我是子组件two</h3>
            <h3>{value.count}</h3>
        </div>
    )
}

export default function UseContext() {
    let [count, setCount] = useState(1)
    let [num, setNum] = useState(10)
    let [person, setPerson] = useState({ name: 'yolo', age: 22 })
    let obj = { count, person }
    return (
        <div>
            {/* MyContext.Provider通过 value属性 将数据传给 子组件 */}
            <MyContext.Provider value={obj}>
                <ChildOne num={num}></ChildOne>
                <ChildTwo></ChildTwo>
            </MyContext.Provider>
            <button onClick={() => {
                setCount(count + 1)
            }}>改变count</button>
        </div>
    )
}
