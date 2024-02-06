import * as React from 'react';
import '@fontsource/roboto/300.css';
import Link from 'next/link';
import {Box, Modal, Button, Typography, Grid, IconButton, Card, CardMedia, 
  CardHeader, CardContent, Avatar} from '@mui/material';
import Input from '../input/input.module';
import TagInput from '../input/tags.module';
import styles from "./formProject.module.css";
import stylesModal from "../viewProject/viewProject.module.css";
import {useState, useEffect} from 'react';
import { requestPOST, setToken } from "@/utils/request";
import SucessAlert from "@/assets/components/alerts/sucessAlert.module";
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    bgcolor: 'background.paper',
    border: 0,
    boxShadow: 24,
    p: 3,
};

const styleModal = {
  position: 'absolute',
  top: '73%',
  left: '50%',
  marginBottom: '10%',
  transform: 'translate(-50%, -50%)',
  width: "60%",
  bgcolor: 'background.paper',
  border: 0,
  boxShadow: 24,
};

export default function FormProject() {
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [url, setUrl] = useState('');
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState("https://i.imgur.com/XRCnu0G.jpeg");
    const [postRegistered, setPostRegistered] = useState(false);

    useEffect(() => {
      //setPostRegistered(false);
        console.log(title, tags, url, username, description, image)
        console.log("FOIIIII")
    },[title, tags, url, username, description, image])

    // async function buttonRegister() {
    //     const token = JSON.parse(localStorage.getItem('token') || '');
    //     setToken(token);
    //     try {
    //       const responseApi = requestPOST({
    //         route:"/portfolio",
    //         body: {
    //             title: title,
    //             tags: tags,
    //             url: url,
    //             username: username,
    //             description: description,
    //             image:image  
    //         }
    //       });
    //       setPostRegistered(true);
    //     } catch (e) {
    //       console.error("Não foi possível cadastrar o portifolio!", e);
    //     };
      
    // };

    const inputClick = () => {
      const fileInput = document.getElementById('fileInput');
  
      if (fileInput) {
        fileInput.click();
      }
    };


    const handleImageChange = (event:any) => {
      setImage(URL.createObjectURL(event.target.files[0]));
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <div>
          {postRegistered && <SucessAlert mensagem={"Cadastro feito com sucesso"}/>}
        <Button className={styles.button}
            onClick={handleOpen}
            variant="contained"
            href='#'
            size="large">
            ADICIONAR PROJETO
        </Button>

        <Modal
          open={open}
          style={{overflow: "auto"}}
        >
          <Box className={styles.box} sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h1">
                Adicionar projeto
            </Typography>

            <Grid container sx={{mt: 1.5}}>
                <Grid item xs={6} sx={{display:{xs:'none',md:'unset'}}}>
                  <Typography className={styles.text} component="p">
                    Selecione o conteúdo que você deseja fazer upload
                  </Typography>

                  <input id="fileInput" style={{ display: 'none' }} type="file" onChange={(e)=> handleImageChange(e)}/>

                  <img className={styles.img}
                    onClick={inputClick}
                    src={image}
                    alt="adicionar"
                  />
                  
                </Grid>
                
                <Grid item xs={6}>
                  <Grid
                    container item spacing={2}
                    direction="column"
                    justifyContent="center"
                    className={styles.fullInput}
                  >
                    <Grid item>
                      <Input sx={{width: '100%'}} 
                      name="" 
                      label="Título" 
                      type="text" 
                      inputValue={title} 
                      functionEdicion={setTitle}
                      id=""/>
                    </Grid>
                    <Grid item>
                      <TagInput/>
                    </Grid>
                    <Grid item>
                      <Input sx={{width: '100%'}}  
                      name="" 
                      label="Link" 
                      type="text" 
                      inputValue={url} 
                      functionEdicion={setUrl}
                      id=""/>
                    </Grid>
                    <Grid item>
                      <Input sx={{width: '100%'}}  
                      name="" 
                      label="Descrição" 
                      type="text" 
                      id="" 
                      inputValue={description} 
                      functionEdicion={setDescription}
                      multiline rows={4}/>
                    </Grid>
                  </Grid>
                </Grid>
            </Grid>

            <Box sx={{display:{xs:'unset',md:'none'}}}>
              <Typography className={styles.text} component="p">
                Selecione o conteúdo que você deseja fazer upload
              </Typography>

              <img className={styles.img}
                onClick={inputClick}
                src={image}
                alt="adicionar"
              />
            </Box>

            <div>
              <Link className={styles.link} href="" onClick={handleOpenModal} passHref>Visualizar publicação</Link>
            </div>

            <div className={styles.box_btn}>
              <Button className={styles.btn_save}
                variant="contained" 
                size="large">
                Salvar
              </Button>
              
              <Button className={styles.btn_close}
                onClick={handleClose}
                variant="contained" 
                size="large">
                Cancelar
              </Button>
            </div>
          </Box>
        </Modal>

        <Modal
          open={openModal}
          style={{overflow: "auto"}}
        >
          <Box sx={styleModal} className={stylesModal.box}>
            <IconButton sx={{position:'absolute', right:8, top:8}} onClick={handleCloseModal}>
              <CloseIcon/>
            </IconButton>
            <Card elevation={0}>
              <Typography className={stylesModal.title} component='p'>Titulo do Banner</Typography>
              <CardHeader sx={{padding:0, paddingBottom:'3%', display:{xs:'none',md:'flex'}}}
                avatar={
                  <Avatar alt="Avatar" src="/Circle.svg"/>
                }
                action={
                  <div className={stylesModal.boxTag}>
                    <IconButton className={stylesModal.tag}>UX</IconButton>
                    <IconButton className={stylesModal.tag}>DEV</IconButton>
                  </div>
                }
                title={
                  <Typography className={stylesModal.name} component="p">Camila Soares</Typography>
                }
                subheader="12/12"
              />
              <CardMedia className={stylesModal.img}
                component="img"
                image="https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ"
              />
              <CardHeader sx={{padding:0, paddingTop:'3%', display:{xs:'flex',md:'none'}}}
              avatar={
                <Avatar  alt="Avatar" src="/Circle.svg"/>
              }
              action={
                <div className={stylesModal.boxTag}>
                  <IconButton className={stylesModal.tag}>UX</IconButton>
                  <IconButton className={stylesModal.tag}>DEV</IconButton>
                </div>
              }
              title={
                <Typography className={stylesModal.name} component="p">Camila Soares</Typography>
              }
              subheader="12/12"
            />

            <CardContent className={stylesModal.content} >
              <p className={stylesModal.text} >
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </p>
            </CardContent>

            <CardContent className={stylesModal.contentLink}>
              <Typography className={stylesModal.down} component="p">Download</Typography>
              <Link href="https://www.youtube.com/" target="_blank" className={stylesModal.link}>www.teste.com</Link>
              </CardContent>
            </Card>
          </Box>
        </Modal>
      </div>
    );
  }