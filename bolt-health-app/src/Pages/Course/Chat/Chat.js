import {useState} from 'react'
import './Chat.css'
import * as BiIcons from 'react-icons/bi'

function Chat () {
    const [hasText, setHasText] = useState(false);
    const newChat = () => {
        setHasText(true);
        var history = document.getElementById("chatField").value;
        document.getElementById("chatHistory").innerHTML = history
        document.getElementById("chatField").value = "";
    }
    return (
        <> 
        <div className='chatPage'>
            <input type="text" id="chatField" name="chatField" className='chatField'></input>
            <BiIcons.BiSend onClick={newChat} className='send' />
            
            <div className={hasText ? 'chatBox' : null} id="chatHistory"></div>
        </div>
        </>
        
    );
};

export default Chat;