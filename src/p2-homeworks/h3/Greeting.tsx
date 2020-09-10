import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
    onKeyUpHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyUpHandler} // деструктуризация пропсов
) => {


    const inputClass = error ? s.error : ''; // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyUpHandler}/>
            <button onClick={addUser}>add</button>
            <span>Total users: {totalUsers}</span>
            {error ? <div className={s.errorText}>{error}</div> : ""}

        </div>
    );
}

export default Greeting;
