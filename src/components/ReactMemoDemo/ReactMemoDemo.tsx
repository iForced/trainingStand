import React, {useReducer, useState} from "react";
import {memoDemoReducer} from "./memoDemoReducer";

export const ReactMemoDemo = () => {
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['Valera', 'Seryoga', 'Kazbek'])
    return (
        <div>
            <MemoCounter counter={counter} onClick={setCounter} />
            <MemoUsers users={users} onClick={setUsers} />
        </div>
    )
}

const Counter = (props: {counter: number, onClick: (newCounter: number) => void}) => {
    console.log('counter rendered')
    return (
        <div>
            <button onClick={() => props.onClick(props.counter + 1)}>+</button>
            {props.counter}
        </div>
    )
}
const MemoCounter = React.memo(Counter)

const Users = (props: {users: Array<string>, onClick: (updatedUsers: Array<string>) => void}) => {
    console.log('users rendered')
    const addUser = () => {
        const updatedUsers = [...props.users, 'Sveta']
        props.onClick(updatedUsers)
    }
    const usersElements = props.users.map((u, i) => <div key={i}>{u}</div>)
    return (
        <div>
            <button onClick={addUser}>Add user</button>
            {usersElements}
        </div>
    )
}
const MemoUsers = React.memo(Users)