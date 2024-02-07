import * as React from "react";
import {Card, CardContent, Typography, Grid, IconButton} from '@mui/material';
import styles from "./cards.module.css";
import BlenderIcon from '@mui/icons-material/Blender';
import PeopleIcon from '@mui/icons-material/People';
import LaptopMacIcon from '@mui/icons-material/LaptopMac'

export default function Cards() {
    return (
    <div>
        <Grid container spacing={4} justifyContent='center'>
            <Grid item xs="auto">
                <Card className={styles.cards}>
                    <CardContent className={styles.cardContent}>
                        <IconButton className={styles.btnIcon}>
                            <BlenderIcon className={styles.icon}/>
                        </IconButton>
                        <Typography gutterBottom variant="h4" component="div">
                        Portfólio Vitaminado
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Publique e veja diversos projetos únicos para todos os gostos!
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs="auto">
                <Card className={styles.cards}>
                    <CardContent className={styles.cardContent}>
                        <IconButton className={styles.btnIcon}>
                            <PeopleIcon className={styles.icon}/>
                        </IconButton>
                        <Typography gutterBottom variant="h4" component="div">
                        Comunidade
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Venha fazer parte dessa comunidade sempre ativa e muito amigável.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs="auto">
                <Card className={styles.cards}>
                    <CardContent className={styles.cardContent}>
                        <IconButton className={styles.btnIcon}>
                            <LaptopMacIcon className={styles.icon}/>
                        </IconButton>
                        <Typography gutterBottom variant="h4" component="div">
                        Tecnologia
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Se curte Tecnologia está no lugar certo, encontre de tudo aqui!
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
    
    );
}