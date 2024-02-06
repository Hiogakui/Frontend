import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import ProjectCard from '@/assets/components/containerProjetos/projectContainerDescobrir.module'
import BuscaTags from '@/assets/components/buscarTags/buscaTags.module'
import Navbar from "@/assets/components/navbar/navbar.module";
import styles from "@/assets/css/descobrir.module.css";
import {Box, Grid} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@/assets/css/globals.css';
import { requestGET, setToken } from '@/utils/request';
import { useRouter } from 'next/navigation';

export default function Descobrir() {
  const [posts, setPost] = useState([]);
  const [tag, setTag] = useState("");
  const { push } = useRouter();

  useEffect(() => {
    loadPosts()
  },[]);

  async function loadPosts() {
    try {
      const token = JSON.parse(localStorage.getItem("token") || "");
      setToken(token);
      const responseAPI = await requestGET('/portfolio');
      //console.log(responseAPI);
      setPost(responseAPI);
    } catch (error) {
      // console.error(error);
      push('/login')
    }
  }

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Orange Portfolio - Descobrir</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        <div className={styles.Container}>
              <h1 className={styles.tituloProjetos}>
                Junte-se à comunidade de inovação, inspiração e descobertas,
                 transformando experiências em conexões inesquecíveis
              </h1>
        </div>

        <div className={styles.BuscaProjetos}>        
          <BuscaTags valueTag={tag} functionSetTag={setTag}/>
        </div>

        <Box sx={{margin:'2.4%'}}>
          <Grid container spacing={{xs: 2, md: 4}} columns={{xs: 4, sm: 8, md: 12}} alignContent='center'>
            {
              posts.filter((post:any, i) => post.tags.join("/").includes(tag))
                .map((post:any, i) => <ProjectCard key={i} data={post} />)
            }
          </Grid>
        </Box>
      </main>
    </div>
  );
}