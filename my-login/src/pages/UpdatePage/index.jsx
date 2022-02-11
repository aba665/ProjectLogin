import React, { useState } from "react";
import '../../css/RegisterStyle.css';

export default function UpdatePage(){
   
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
   
    return (
        <div id='login'>
    
            <div className='form'>
                
                <h1 className='title'>Atualização de Dados</h1>
                
                <div className='field'>

                    <label htmlFor='email'>Novo Email:</label>
                    <input 
                        type="email" 
                        name="email" id="email" 
                        value={email} onChange={(e) => setEmail(e.target.value)}
                        />

                </div>
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
                    <button type='submit'  onClick={null}>Atualizar</button>
                </div>
            </div>

    </div>

    )

}