import React from "react";

const Nav = ({ onLogout, styleCss, onUpdate, onRemoveCount }) => {
    return (
        <div className='nav'>
        <h1 className="logo">Repository</h1>
        <ul className={ styleCss }>
               <li>Configurações
                   <ul className="secondUl">
                       <li onClick={onUpdate}>Update Data</li>
                       <li onClick={onRemoveCount}>Remove Count</li>
                       <li onClick={onLogout}>LogOut</li>
                   </ul>
               </li>
           </ul>
    </div>

    )

}

export default Nav;