import React from "react";
import styles from "./home.module.scss";
import { context } from "./home";

const User = () => {
    return (
        <context.Consumer>
            {value => <div className={styles['user']}>
                <h3>{value}</h3>
                <h3>{value}</h3>
                <span>{value}</span>
                <button>Delete User</button>
            </div>}
        </context.Consumer>
        
    );
}

export default User;