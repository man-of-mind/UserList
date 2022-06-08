import React, { useContext, useState } from "react";
import styles from "./home.module.scss";


interface properties {
    users?: any,
    addUser?: any,
    setUsers?: any
}

export const UserContext = React.createContext<properties>({});

export const NewUser = () => {
    const { addUser } = useContext(UserContext);
    const [name, setUserName] = useState("");
    const [age, setUserAge] = useState("");
    const [bio, setUserBio] = useState("");


    function setData() {
        const data = [`${name}`, `${age}`, `${bio}`];
        addUser(data);
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setData();
        setUserName("");
        setUserAge("");
        setUserBio("");
    }

    return (
        <div className={styles['create-user']}>
            <h2>ADD NEW USER</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="name" 
                    value={name} 
                    required={true}
                    onChange={(e) => setUserName(e.target.value)}
                ></input>
                <input 
                    type="text" 
                    placeholder="age" 
                    className={styles['age-input']} 
                    value={age} 
                    required={true}
                    onChange={e => setUserAge(e.target.value)}
                ></input>
                <textarea 
                    typeof="text" 
                    placeholder="bio" 
                    rows={5} 
                    cols={26} 
                    value={bio} 
                    required={true}
                    onChange={e => setUserBio(e.target.value)}></textarea>
                <button>Add User</button>
            </form>
        </div>
    );
}

