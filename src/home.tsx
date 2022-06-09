import React from "react";
import { NewUser } from "./new-user";
import styles from "./home.module.scss";
import { useContext } from "react";
import { UserContext } from "./new-user";

const Home = () => {
    const { users, setUsers } = useContext(UserContext);

    const removeUser = (ind: number) => {
        const updatedUsers = [...users.slice(0, ind), ...users.slice(ind + 1)];
        setUsers(updatedUsers);
    }
    const userCards = users.map((user: (string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined)[], index: number) => {
        return (
            <div className={styles['user']} key={index}>
                <h3>{user[0]}</h3>
                <h3>{user[1]}</h3>
                <span>{user[2]}</span>
                <button onClick={() => removeUser(index)}>Delete User</button>
            </div>
        );
    });
 

    return (
        <div className={styles['home']}>
            <NewUser />
            <h2 className={styles['text']}>Available Users</h2>
            <div className={styles['users-container']}>
                {userCards}
            </div>
        </div>
    );
}

export default Home;