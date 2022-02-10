import React, { useEffect, useState, useContext} from 'react';

import '../../css/HomeStyle.css'

import Nav from '../../components/Nav';

import Search from '../../components/Search';

import Repository from '../../components/Repository';

import { getRepositories, createRepository, destroyRepository } from '../../service/api';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';



const HomePage = () => {
    const { user, logout } = useContext(AuthContext);
    const [ repositories, setRepositories ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ loadingError, setLoadingError] = useState(false); 

    const loadData = async (query = '') => {
        try {
            setLoading(true);
            const response = await getRepositories(user?.id, query);
            setRepositories(response.data);
            setLoading(false);
            
        } catch (err) {
            console.log(err);
            setLoadingError(true); 
        }
    }

    useEffect(() => {
        (async () => await loadData())();
    }, [])
    

   const handleLogout = () => {
        logout();
   }
   const handleSearch = (query) => {
       if(query === '' || query.length === 0){
           alert('Digite Algo No Campo De Busca Por Favor!');
        }else{
           
            loadData(query);

        }
   }
   const handleDelete = async (repository) => {
       try {
        await destroyRepository(user?.id, repository._id);
        console.log(repository, repository._id)
        await loadData(); 
       } catch (err) {
        console.error(err);
        setLoadingError(true);
       } 
   }
   const handleAdd = async (url) => {
     try {
       await createRepository(user?.id, url);
       await loadData();  
     } catch (err) {
         console.error(err);
         setLoadingError(true);
     } 
    }
    
    if(loadingError){
        return (
            <div className="loading">
                Erro no carregamento dos dados. <Link to='/login'>Voltar</Link>
            </div>
        )
    }
   if(loading){
       return (
           <div className="loading">
               Carregando...
           </div>
       )
   }

    return (
        <div id='main'>
            <Nav onLogout={handleLogout}/>
            <Search onSearch={handleSearch}/>
            <Repository repositories={repositories} onDeleteRepository={handleDelete} onNewRepo={handleAdd}/>
        </div>
    )

}

export default HomePage;