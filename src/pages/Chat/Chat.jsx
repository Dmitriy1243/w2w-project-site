import Button from "../../components/Button/Button";
import styles from './chat.module.scss';
import { useState } from "react";


const Chat = () => {
    const [state, setState] = useState(null);
    const [value, setValue] = useState('');
    const wsUrl = 'wss://echo.websocket.org/';
    let socket;


const openServer = () => {
    socket = new WebSocket(wsUrl);
    socket.onopen = function(event) {
        setState(value);
        socket.send(value);
    };
} 

const sendMessage = () => {
    socket = new WebSocket(wsUrl);
    socket.onmessage = function(event) {
        setState(`Получаем данные с сервера: ${event.data}`);
    };
};

const closeServer = () => {
    socket = new WebSocket(wsUrl);
    socket.onclose = function(event) {
        if (event.wasClean) {
            setState(`Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
        } else {
            setState('Соединение прервано');
        }
    };
};

const handlChangr = (e) => {
    setValue(e.target.value)
};

    return (
        <>
            <h1>Чат</h1>
            <input onChange={handlChangr}></input>
            <h2>{state}</h2>
            <div className={styles.wrapperButton}>
                <Button className={styles.button} click={openServer} name={'Открыть соединение'} />
                <Button className={styles.button} click={closeServer} name={'Закрыть соединение'} />
                <Button className={styles.button} click={sendMessage} name={'Получить сообщение'} />
            </div>
        </>
    )
};

export default Chat;