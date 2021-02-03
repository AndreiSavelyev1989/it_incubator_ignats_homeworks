import React from "react";
import styles from "./AlternativeMessage.module.css"

function AlternativeMessage() {
    return (
        <div className={`${styles.message} ${styles.droplet}`}>
            <div className={styles.message__text}>
                <div className={styles.message__text__content}>Pudding sweet roll gingerbread croissant gummi
                    bears danish biscuit lemon drops. Chocolate cake chocolate bar danish soufflé sweet roll
                    toffee caramels tart dessert. Chupa chups topping caramels biscuit ice cream chocolate bar.
                    Halvah apple pie chupa chups powder ice cream.
                    <div className={styles.message__time}>18:12</div>
                </div>
            </div>
        </div>
    );
}

export default AlternativeMessage;
