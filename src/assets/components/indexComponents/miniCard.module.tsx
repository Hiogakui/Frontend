import {Box, Card, CardContent, CardMedia, Typography} from '@mui/material';
import styles from "./miniCard.module.css"

export default function FullCard() {
    return (
      <div>
        <Card className={styles.fullCard}>
          <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <CardContent>
              <Typography component="div" variant="h5">
                From Dev to Dev
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Squad-30
              </Typography>
            </CardContent>
          </Box>
          
          <CardMedia
            component="img"
            sx={{width: 151}}
            image='/People.svg'
          />
        </Card>
      </div>
    );
}