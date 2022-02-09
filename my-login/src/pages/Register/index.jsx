import React, { useState } from "react";
import '../../css/LoginStyle.css';
import '../../css/RegisterStyle.css'
import { Link } from "react-router-dom";

function Register(){
    
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ msg, setMsg ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    const cadastroPage = () => {
      
        if(email.length <= 0  || password.length <= 0){

            alert('Preencha todos os dados corretamente!');

        }else{
            console.log(email, password);
            setLoading(true)
            
            setTimeout(() => {
                setLoading(false);
                setMsg(true); 
            }, 3000)

        }

    }
     
    if(loading){
        return (
            <div className="notification">
                Carregando...        
            </div>
        )
    }

    if(msg){
        return (
            <div className="notification">
                Usuário Cadastrado com sucesso! Clique no botão para ir para o login.

                <div className="containerMsg">
                <Link to='/login'><button className="btnNotification">Login</button></Link>
                </div>
                
            </div>

        )
    }

    return (
        <div id='login'>
          
        <div className='form-register'>
        <h1 className='title'>Sistema De Cadastro</h1>
            <div className='field'>
                <label htmlFor='email'>Email:</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='field'>
                <label htmlFor='password'>Senha:</label>
                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className='actions'>
              <button type='submit'  onClick={cadastroPage}>Cadastrar</button>
          </div>
        </div>
    </div>

    )
}

export default Register;
