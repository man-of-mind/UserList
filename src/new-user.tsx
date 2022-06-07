import React, { useState } from "react";
import styles from "./home.module.scss";
import User from "./user";

export const UserContext = React.createContext<string>("");

export const Users = () => {

}

interface props {
    name?: string,
    age?: string,
    bio?: string
}

export const NewUser = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [bio, setBio] = useState("");
    const [datum, setData] = useState<Array<props>>([]);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        const name = e.target[0].value;
        const age = e.target[1].value;
        const bio = e.target[2].value;
        const data:Array<props> = [{name: `${name}`}, {age: `${age}`}, {bio: `${bio}`}];
        setData(data);
    }
    return (
        <UserContext.Provider value="timothy">
        <div className={styles['create-user']}>
            <h2>ADD NEW USER</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <input 
                    type="text" 
                    placeholder="age" 
                    className={styles['age-input']} 
                    value={age} 
                    onChange={e => setAge(e.target.value)}
                ></input>
                <textarea 
                    typeof="text" 
                    placeholder="bio" 
                    rows={5} 
                    cols={26} 
                    value={bio} 
                    onChange={e => setBio(e.target.value)}></textarea>
                <button>Add User</button>
            </form>
        </div>
        </UserContext.Provider>
    );
}

