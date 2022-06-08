import React from "react";
import styles from "./home.module.scss";

const User = () => {
    return (
        <div className={styles['user']}>
            <h3>timothy</h3>
            <h3>24</h3>
            <span>Software engineer</span>
            <button>Delete User</button>
        </div>
    );
}

export default User;