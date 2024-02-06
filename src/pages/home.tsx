import React from 'react';
import Head from 'next/head';
import Navbar from "../assets/components/navbar/navbar.module";
import PerfilCard from '../assets/components/perfilCard/perfilCard.module';
import Seach from '../assets/components/buscarTags/buscaTags.module';
import ProjectCard from '../assets/components/containerProjetos/projectContainer.module';
import ProjectContainer from '@/assets/components/containerProjetos/projectContainer.module'
import '../assets/css/globals.css';
import styles from "../assets/css/home.module.css";

import {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import {requestGET, setToken} from '../utils/request';
import { PostAdd } from '@mui/icons-material';

export default function Home() {
  const [userPosts, setUserPosts] = useState([]);
        
   
    async function fetchData() {   
      try {
        const dataToken = JSON.parse(localStorage.getItem('user') || '{}');
        //console.log(dataToken.token)
        setToken(dataToken.token);
        const posts = await requestGET('/portfolio/userposts');
        setUserPosts(posts);
        console.log(posts)
      } catch (e) {
        console.error('Erro ao obter os posts do usuário:', e);
      }
  }

    useEffect(() => {
        fetchData();
    },[]) 

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Orange Portfolio - Home</title>
      </Head>
      <header>
        <Navbar />
      </header>

      <main>
        <div className={styles.Container}>
          <PerfilCard />
        </div>
        <div className={styles.BuscaProjetos}>        
          <h3 className={styles.title}>Meus projetos</h3>
          <Seach/>
          {
            userPosts.map((post:any ,i ) => {
              return <ProjectContainer key={i} data={post} />
            })
          }
        </div>
      </main>
    </div>
  );
}

