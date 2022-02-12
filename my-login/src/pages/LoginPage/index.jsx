import React,  { useContext, useState }  from 'react';
import { AuthContext } from '../../contexts/auth';
import '../../css/LoginStyle.css';


const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleSubmit = async () => {
          

          if(email.length <= 0  || password.length <= 0){

              alert('Preencha todos os dados corretamente!');

          }else{

        
            login(email, password);

          }
    }

    return (
        <div id='login'>
          
            <div className='form'>
            <h1 className='title'>Login Do Sistema</h1>
                <div className='field'>
                    <label htmlFor='email'>Email:</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='field'>
                    <label htmlFor='password'>Senha:</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className='actions'>
                  <button type='submit'  onClick={handleSubmit}>Entrar</button>
              </div>
            </div>
        </div>
    )
}

export default LoginPage;