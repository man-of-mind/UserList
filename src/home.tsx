import React from "react";
import { NewUser, UserContext } from "./new-user";
import User from "./user";
import styles from "./home.module.scss";

export const context = React.createContext("");

const Home = () => {
    return (
        <UserContext.Consumer>
        {value =>
        
        <div className={styles['home']}>
            <NewUser />
            <h2>Availalble Users</h2>
            <div className={styles['users-container']}>
                <context.Provider value="timi">
                    <User />
                </context.Provider>
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>
            
        </div>}
        </UserContext.Consumer>
    );
}

export default Home;