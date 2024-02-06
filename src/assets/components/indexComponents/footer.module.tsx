import {Box, Container, Typography, Link} from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{bgcolor: 'background.paper', py: 6}}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="">Orange Portfólio</Link>{' '}
          {new Date().getFullYear()}{'.'}
        </Typography>
      </Container>
    </Box>
  );
}