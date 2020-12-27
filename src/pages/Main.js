import React, { useState, useEffect } from 'react';
import { generateGravatar } from '../gravatar';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { sendMessage, db } from '../config/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';

const Main = ({ name }) => {
    const [string, setString] = useState('');
    const [avatarurl, setAvatarurl] = useState('');
    const [message, setMessage] = useState();

    const handleClick = async () => {
        sendMessage(name, string)
        readData()
    };

    useEffect(() => {
        const url = generateGravatar(name)
        setAvatarurl(url);
        readData()
    }, []);

    const readData = async () => {
        const tempArray = []
        await db
            .collection('messages')
            .orderBy('createAt', 'asc')
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    console.log(doc.id, " => ", doc.data());
                    tempArray.push(doc.data())
                });
                setMessage(tempArray)
            })
    };
    console.log(message)

    return (
        <div>
            <header>aaa</header>
            <main className='ue'>
                {message && message.map((element, index) => {
                    return (
                        <ul key={index}>
                            <li className='kesu'>
                                <Avatar alt={name} src={generateGravatar(element.name)} />
                                <div className='namesize'>{element.name}</div><br />{element.message}
                            </li>
                        </ul>
                    );
                })}
            </main>
            <footer className='yoko'>
                <div>
                    <Avatar alt={name} src={generateGravatar(name)} />
                    <div className='namesize'>{name}</div>
                </div>
                <TextField className='text' id="text" label="text" value={string} onChange={e => setString(e.target.value)} />
                <Button variant="outlined" onClick={handleClick}>送信</Button>
            </footer>
        </div>
    );
};

export default Main;
