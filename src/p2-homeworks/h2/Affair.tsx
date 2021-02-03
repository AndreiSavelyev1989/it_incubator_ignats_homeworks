import React from "react";
import {AffairType} from "./HW2";
import styles from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix

    return (
        <div>
            <span className={styles.affairContainer}>{props.affair.name}</span>
            <button onClick={deleteCallback} className={styles.affairBtn}>X</button>
        </div>
    );
}

export default Affair;
