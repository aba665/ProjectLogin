import React,  { useState }  from 'react';
import '../../css/LoginStyle.css';


const LoginPage = () => {
    const [ user ]
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();

    const handleSubmit = async (e) => {
          
          e.preventDefault()

          if(email.length <= 0  || password.length <= 0){

              alert('Preencha todos os dados corretamente!');

          }else{

              console.log('Submit', email, password);
              

          }
    }

    return (
        <div id='login'>
          
            <form className='form' onSubmit={handleSubmit}>
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
                  <button type='submit'>Entrar</button>
              </div>
            </form>
        </div>
    )
}

export default LoginPage;