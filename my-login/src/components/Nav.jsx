import React from "react";

const Nav = ({ onLogout}) => {
    return (
        <div className='nav'>
        <h1 className="logo">Repository</h1>
        <button className='btn btnHidden' onClick={onLogout}>Sair</button>
    </div>

    )

}

export default Nav;