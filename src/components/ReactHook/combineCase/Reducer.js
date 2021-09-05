import React, { createContext, useReducer } from 'react'
import ChildOne from './ChildOne.js'
import ChildTwo from './ChildTwo.js'
// createContext  MyContext useReducer redux

export const MyContext = createContext()

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

export function Reducer(props) {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <div>
            <MyContext.Provider value={{ state, dispatch }}>
                <ChildOne></ChildOne>
                <ChildTwo></ChildTwo>
            </MyContext.Provider>
        </div>
    )
}
