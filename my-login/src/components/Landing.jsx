import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="container">
            <div className="content">
                <h1>
                    Olá seja bem vindo a nossa página de crud, caso você não tenha um usuário cadastrado clique no botão de  cadastrar, caso já tenha clique no botão de login!
                    Espero que tenha uma ótima experiência.
                </h1>
                <div className="options">
    
                    <Link className="link " to='/login'> <button className="btnOption">Login</button></Link>
                    <Link className="link " to='/cadastrar'> <button className="btnOption">Cadastro</button></Link>

                </div>
            </div>

        </div>
    )

}

export default Landing;