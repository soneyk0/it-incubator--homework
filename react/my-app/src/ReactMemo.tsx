import React, {useState} from "react";

const NewMessagesCounter = (props: {count:number}) => {
    return <div>{props.count}</div>
}

type UsersType = {
    users: Array<string>
}
const UsersSecret = (props: UsersType) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users=React.memo(UsersSecret);

export const Example1 = () => {
    const [counter,setCounter]=useState(0)
    const [users,setUsers]=useState(['Yana','Katy','Sveta','Anna'])

    const addUser=()=>{
        const newUsers=[...users,'Masha']
        setUsers(newUsers)
    }


    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>

}
