import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";
import messageAvatar from "../../images/messageAvatar.png"

const messageData = {
    avatar: messageAvatar,
    name: "Some Name",
    message: "What is Lorem Ipsum?\n" +
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. " +
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
        "when an unknown printer took a galley of type and scrambled it to make a type " +
        "specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, " +
        "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset " +
        "sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "22:00",
};

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1


            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage/>
            <hr/>
        </div>
    );
}

export default HW1;
