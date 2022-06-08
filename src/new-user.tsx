import React, { useContext, useEffect, useState } from "react";
import styles from "./home.module.scss";


interface properties {
    users?: any,
    setUsers?: any
}

export const UserContext = React.createContext<properties>({});

export const Users = () => {

}


export const NewUser = () => {
    const { setUsers, users} = useContext(UserContext);
    const [name, setUserName] = useState("");
    const [age, setUserAge] = useState("");
    const [bio, setUserBio] = useState("");


    console.log(users, typeof(users));
    function setData() {
        const data = [`${name}`, `${age}`, `${bio}`];
        console.log(users)
        let dat = users.push(data);
        setUsers(dat);
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setData();
    }

//    useEffect(() => {
//        setData();
//    })

    return (
        <div className={styles['create-user']}>
            <h2>ADD NEW USER</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="name" 
                    value={name} 
                    onChange={(e) => setUserName(e.target.value)}
                ></input>
                <input 
                    type="text" 
                    placeholder="age" 
                    className={styles['age-input']} 
                    value={age} 
                    onChange={e => setUserAge(e.target.value)}
                ></input>
                <textarea 
                    typeof="text" 
                    placeholder="bio" 
                    rows={5} 
                    cols={26} 
                    value={bio} 
                    onChange={e => setUserBio(e.target.value)}></textarea>
                <button>Add User</button>
            </form>
        </div>
    );
}

