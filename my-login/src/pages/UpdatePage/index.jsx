import React, { useState, useContext } from "react";
import '../../css/RegisterStyle.css';
import { updateUser } from "../../service/api";
import { AuthContext } from '../../contexts/auth';

export default function UpdatePage(){
   
    const [ password, setPassword ] = useState('');
    const { user } = useContext(AuthContext);

   
    async function update(password){
        try {
           await updateUser(user?.id, password) 
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div id='login'>
    
            <div className='form'>
                
                <h1 className='title'>Atualização de Dados</h1>
                
                <div className='field'>

                    <label htmlFor='password'>Nova Senha:</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        />

                </div>
                <div className='actions'>
                    <button type='submit'  onClick={update}>Atualizar</button>
                </div>
            </div>

    </div>

    )

}