import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { sendMessage, readData } from '../config/firebase';

const Main = ({ name }) => {
    const [string, setString] = useState('');
    const [data, setData] = useState([]);

    const handleClick = async () => {
        sendMessage(name, string)
        await readData()
        setData(data);
        console.log(data)
    };

    return (
        <div>
            {data.map((element, index) => {
                return (
                    <ul key={index}>
                        <li>{element.name}</li>
                        <li>{element.message}</li>
                        <li>{element.createAt}</li>
                    </ul>
                );
            })}
            <footer>
                <TextField id="message" label="message" value={string} onChange={e => setString(e.target.value)} />
                <Button variant="outlined" onClick={handleClick}>送信</Button>
            </footer>
        </div>
    );
};

export default Main;
