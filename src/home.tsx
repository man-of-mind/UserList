import React, { useState } from "react";
import { NewUser } from "./new-user";
import styles from "./home.module.scss";
import { UserContext } from "./new-user";

const Home = () => {
    const [users, setUsers] = useState<Array<Array<string>>>([]);

//    const userCards = users.map(user => {
//        return (
//            <div className={styles['user']}>
//                <h3>{user[0]}</h3>
//                <h3>{user[1]}</h3>
//                <span>{user[2]}</span>
//                <button>Delete User</button>
//            </div>
//        );
//    })


    return (
        <UserContext.Provider value={{ users, setUsers}}>
            <div className={styles['home']}>
                <NewUser />
                <h2>Available Users</h2>
                <div className={styles['users-container']}>
{/*                    {userCards}
*/}                </div>
            </div>
        </UserContext.Provider>
    );
}

export default Home;