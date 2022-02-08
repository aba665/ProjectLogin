import React, { useEffect, useState, useContext} from 'react';
import '../../css/HomeStyle.css';
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
    const [ loadError, setloadError] = useState(false);

    const loadData = async (query = '') => {
        try {
            const response = await getRepositories(user?.id, query);
            setRepositories(response.data);
            setLoading = false;
            
        } catch (err) {
            setloadError = true;
            console.error(err);
        }
    }

    useEffect(() => {
        (async () => await loadData())();
    }, [])

   const handleLogout = () => {
        logout();
   }
   const handleSearch = (query) => {
       if(query === '' || query.length == 0){
           alert('Digite Algo No Campo De Busca Por Favor!');
        }else{
            console.log("buscando", query);

        }
   }
   const handleDelete = async (repository) => {
       await destroyRepository(user?.id, repository._id);
       await loadData();
   }
   const handleAdd = async (url) => {
     try {
       await createRepository(user?.id, url);
       await loadData();  
     } catch (error) {
         console.error(err);
         setloadError(true);
     } 
   }

   if(loading){
       return (
           <div className="loading">
               Carregando...
           </div>
       )
   }
   if(loadError){
       return (
           <div className="loading">
               Erro no carregamento dos dados. <Link to='/login'>Voltar</Link>
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