import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = ({ setName }) => {
    const [string, setString] = useState('');

    const handleClick = () => {
        setName(string)
    };

    return (
        <div className='login'>
            <h1>井戸端会議 for web</h1>
            <TextField id="name" label="お名前" value={string} onChange={e => setString(e.target.value)} /><br />
            <Button variant="outlined" onClick={handleClick}>ログイン</Button>
        </div>
    );
};

export default Login;
