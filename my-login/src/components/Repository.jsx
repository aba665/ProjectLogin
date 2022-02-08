import React, { useState } from "react";

const Repository = ({repositories, onDeleteRepository, onNewRepo}) => {
    const [ newRepo, setNewRepo] = useState('');
    
    return (
        <div className="repositories">
        <h2 className="titulo">Repositórios</h2>

        <ul className="list">
           {  
            repositories.map((repository) => (
            <li className="item" key={repository._id}>
                <div className="info">
                    <div className="owner">{repository.name.substring(0, repository.name.indexOf('/'))}</div>
                    <div className="name">{repository.name.substring(repository.name.indexOf('/') +  1)}</div>
                </div>
                    <button className='btn' onClick={() => onDeleteRepository(null)}>Delete</button>
            </li>

            ))
           } 
        </ul>

        <div className="new">
            <label htmlFor="new-repo">New Repository</label>
            <input 
            type="url" 
            name='new-repo' 
            id='new-repo'
            value={newRepo}
            onChange={(e) => setNewRepo(e.target.value)}
            />
            <button className='btn' onClick={() => onNewRepo(newRepo)}>Add</button>
        </div>
    </div>
    )

}

export default Repository;