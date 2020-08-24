import React from "react";
import styles from "./Message.module.css";

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={styles.message}>
            <div className={styles.avatar}><img src={props.avatar} alt="avatar"/></div>
            <div className={styles.messageContainer}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.messageText}>{props.message}</div>
                <div className={styles.time}>{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
