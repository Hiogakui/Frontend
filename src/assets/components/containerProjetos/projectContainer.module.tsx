import * as React from 'react';
import styles from "./projectContainer.module.css"
import {Card, CardHeader, Box, CardMedia, CardContent, Typography, IconButton,
     Avatar, Menu, MenuList, MenuItem} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { requestDELETE, requestPUT, setToken } from '../../../utils/request'
import {useState, useEffect} from 'react';

export default function ProjectContainer({data}:any) {

    
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [postExists, setPostExists] = useState(false);

    useEffect(() => {
        setPostExists(false);
        console.log(title, tags, url, description, image)
      },[title, tags, url, description, image]);

    async function deleteById(postId:any) {
        const token = JSON.parse(localStorage.getItem('token') || '');
        setToken(token);
        try {
            await requestDELETE(`/portfolio/${postId}`);
        } catch (e) {
            console.error("Não foi possível excluir o portifólio.", e);
        }
    };

    // Implementar PUT quando fazer aba do botao editar
    async function updateById(postId:any, body:any) {
        const token = JSON.parse(localStorage.getItem('token') || '');
        setToken(token);
        try {
            await requestPUT({route:`/portfolio/${postId}`, 
            body: {
                title: title,
                tags: tags,
                url: url,
                description: description,
                image:image
            }  
        });
        } catch (e) {
            console.error("Não foi possível atualizar o portifólio.", e)
        }
    };

    const [anchorElEdit, setAnchorElEdit] = React.useState<null | HTMLElement>(null);
    const data1 = data;

    const handleOpenEdit = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElEdit(event.currentTarget);
    };
    const handleCloseEdit = () => {
        setAnchorElEdit(null);
    };

    //console.log(data1)

  return (

    <div className={styles.box}>
        <IconButton className={styles.icon} size="small" onClick={handleOpenEdit}>
            <EditIcon />
        </IconButton>

        <Card elevation={0} sx={{ maxWidth: 345 }}>
            <Box >
                <Menu 
                    anchorEl={anchorElEdit}
                    open={Boolean(anchorElEdit)} 
                    onClose={handleCloseEdit}>
                    <MenuList>
                        <MenuItem>Editar</MenuItem>
                        <MenuItem onClick={() => deleteById(data.id)}>Excluir</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            
            <CardMedia
                component="img"
                width={"auto"}
                image={data.image} //"https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ"
            />
            <CardHeader sx={{padding:0, paddingTop:1}}
                avatar={
                    <Avatar alt="Avatar" src="/Circle.svg" />
                }
                title={
                    <Typography >
                    {data.userName} • {data.date} | {data.tags.join("/")}
                    </Typography>
                }
            />

        </Card>
            
        
    </div>
  );
}