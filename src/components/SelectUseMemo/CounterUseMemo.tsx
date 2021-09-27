import React, {useMemo, useState} from "react";

export const Users = (props: {users: Array<string>}) => {
    console.log('Users rendered')

    return (
        <div>
            {props.users.map((u,i) => <div key={i}>{u}</div>)}
        </div>
    )
}
export const UsersMemo = React.memo(Users)

export const UseMemoExample =() => {
    console.log('UseMemo example')

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Ilya', 'Valera', 'Kazbek'])

    const filteredUsers = useMemo(() => {
        const usersWithL = users.filter(u => u.toLowerCase().indexOf('l') > -1)
        return usersWithL
    }, [users])

    const addUser = () => {
        setUsers([...users, 'Oleg'])
    }

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            {counter}
            <UsersMemo users={filteredUsers} />
        </div>
    )
}