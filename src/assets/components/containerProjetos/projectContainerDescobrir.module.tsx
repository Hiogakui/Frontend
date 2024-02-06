import * as React from 'react';
import styles from "./projectContainerDescobrir.module.css"
import stylesModal from "../viewProject/viewProject.module.css";
import {Box, Modal, Card, CardHeader, Grid, CardMedia, Typography, CardContent,
    IconButton, Avatar} from '@mui/material';
import '@fontsource/roboto/300.css';
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';

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

export default function ProjectContainer({data}:any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid item xs={3} sm={4} md={4}>
    <div className={styles.box} onClick={handleOpen}>
        <Card elevation={0} sx={{maxWidth: 445, minWidth: 265,}}>            
            <CardMedia className={styles.media}
                component="img"
                image={data.image}
            />
            <CardHeader sx={{padding:0, paddingTop:1}}
                avatar={
                    <Avatar sx={{width:"30px", height:"30px"}} alt="Avatar" src="/Circle.svg" />
                }
                action={
                    <div className={styles.boxTag}>
                        <IconButton className={styles.tag}>{data.tags[0]}</IconButton>
                        <IconButton className={styles.tag}>{data.tags[1]}</IconButton>
                    </div>
                }
                title={
                    <Typography sx={{fontSize:15}}>
                        {data.userName} • {data.date}
                    </Typography>
                }
            />
        </Card>
    </div>

    <div>
        <Modal
            open={open}
            style={{overflow: "auto"}}
         >
             <Box sx={styleModal} className={stylesModal.box}>
                <IconButton sx={{position:'absolute', right:8, top:8}} onClick={handleClose}>
                    <CloseIcon/>
                </IconButton>
                <Card elevation={0}>
                    <Typography className={stylesModal.title} component='p'>{data.title}</Typography>
                    <CardHeader sx={{padding:0, paddingBottom:'3%', display:{xs:'none',md:'flex'}}}
                        avatar={
                             <Avatar alt="Avatar" src="/Circle.svg"/>
                        }
                        action={
                            <div className={styles.boxTag}>
                                <IconButton className={stylesModal.tag}>{data.tags[0]}</IconButton>
                                <IconButton className={stylesModal.tag}>{data.tags[1]}</IconButton>
                             </div>
                        }
                        title={
                            <Typography className={stylesModal.name} component="p">{data.userName}</Typography>
                        }
                         subheader={data.date}
                    />
                    <CardMedia className={stylesModal.img}
                        component="img"
                        image={data.image}
                    />
                    <CardHeader sx={{padding:0, paddingTop:'3%', display:{xs:'flex',md:'none'}}}
                        avatar={
                            <Avatar  alt="Avatar" src="/Circle.svg"/>
                        }
                        action={
                            <div className={stylesModal.boxTag}>
                                <IconButton className={stylesModal.tag}>{data.tags[0]}</IconButton>
                                <IconButton className={stylesModal.tag}>{data.tags[1]}</IconButton>
                            </div>
                        }
                        title={
                            <Typography className={stylesModal.name} component="p">{data.userName}</Typography>
                        }
                        subheader={data.date}
                    />

                    <CardContent className={stylesModal.content} >
                        <p className={stylesModal.text} >
                            {data.description}
                        </p>
                    </CardContent>

                    <CardContent className={stylesModal.contentLink}>
                        <Typography className={stylesModal.down} component="p">Download</Typography>
                        <Link href={`http://${data.url}`} target="_blank" className={stylesModal.link}>{data.url}</Link>
                    </CardContent>
                </Card>
            </Box>
        </Modal>
    </div>
    </Grid>
  );
}