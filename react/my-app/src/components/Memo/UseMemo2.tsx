import React, {useMemo, useState} from "react";


const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Yn', 'Katy', 'Sveta', 'Anna'])


    const newArray = useMemo(() => {
            return users.filter(u => u.toLowerCase().indexOf('a') > -1)
        }, [users])

    const addUser=()=>{
        const newUsers=[...users,'Masha']
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>

}