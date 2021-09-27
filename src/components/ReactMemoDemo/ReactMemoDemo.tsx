import React, {useReducer} from "react";
import {counterReducer} from "./counterReducer";
import {usersReducer} from "./usersReducer";

export const ReactMemoDemo = () => {
    const [counter, dispatchCounter] = useReducer(counterReducer, 0)
    const [users, dispatchUsers] = useReducer(usersReducer, ['Valera', 'Seryoga', 'Kazbek'])
    return (
        <div>
            <MemoCounter counter={counter} onClick={dispatchCounter} />
            <MemoUsers users={users} onClick={dispatchUsers} />
        </div>
    )
}

const Counter = (props: {counter: number, onClick: (action: {type: 'ADD' | 'SUB'}) => void}) => {
    console.log('counter rendered')
    return (
        <div>
            <button onClick={() => props.onClick({type: 'ADD'})}>+</button>
            <button onClick={() => props.onClick({type: 'SUB'})}>-</button>
            {props.counter}
        </div>
    )
}
const MemoCounter = React.memo(Counter)

const Users = (props: {users: Array<string>, onClick: (action: {type: 'ADD_SVETA' | 'ADD_IGOR'}) => void}) => {
    console.log('users rendered')
    const addUser = (name: string) => {
        name === 'Sveta'
            ? props.onClick({type: "ADD_SVETA"})
            : props.onClick({type: "ADD_IGOR"})
    }
    const usersElements = props.users.map((u, i) => <div key={i}>{u}</div>)
    return (
        <div>
            <button onClick={() => addUser('Sveta')}>Add Sveta</button>
            <button onClick={() => addUser('Igor')}>Add Igor</button>
            {usersElements}
        </div>
    )
}
const MemoUsers = React.memo(Users)