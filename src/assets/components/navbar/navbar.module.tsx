import * as React from "react";
import Link from "next/link";
import styles from "./navbar.module.css"
import {AppBar, Toolbar, Box, IconButton, Tooltip, Avatar, Menu, 
    MenuList, MenuItem} from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenUser = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUser = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar className={styles.navbar} elevation={0} position="static">
            <Toolbar>
                <Box sx={{display:{xs:'none', md:'flex'}}}>
                    <img
                        src="/Logo-orange.svg"
                        alt="Logo Orage Juice"
                        style={{width: "auto", marginRight:"7rem"}}
                    />
                </Box>
                
                <Box sx={{flexGrow:1, display:{xs:'none',md:'flex'}}}>
                    <Link href="/home" className={styles.link}>Meus projetos</Link>
                    <Link href="/descobrir" className={styles.link}>Descobrir</Link>
                </Box>

                <Box sx={{display:{xs:'flex',md:'none'}}}>
                    <IconButton size="large" edge="start" color="inherit" onClick={handleOpenNavMenu}>
                        <MenuIcon/>
                    </IconButton>
                    <Menu 
                        anchorEl={anchorElNav}
                        open={Boolean(anchorElNav)} 
                        onClose={handleCloseNavMenu} 
                        sx={{display:{xs:'flex',md:'none'}}}>
                        <MenuList>
                            <Link href="/home" className={styles.linkMenu}><MenuItem>Meus projetos</MenuItem></Link>
                            <Link href="/descobrir" className={styles.linkMenu}><MenuItem>Descobrir</MenuItem></Link>
                        </MenuList>
                    </Menu>
                </Box>

                <Box sx={{flexGrow:1,display:{xs:'flex', md:'none'}}}>
                    <img
                        src="/Logo-orange.svg"
                        alt="Logo Orage Juice"
                        style={{width: "auto"}}
                    />
                </Box>
                
                <Box>
                    <Tooltip title="Configurações">
                        <IconButton onClick={handleOpenUser}>
                            <Avatar alt="Avatar" src="/Circle.svg" />
                        </IconButton>
                    </Tooltip>
                    <Menu 
                        anchorEl={anchorElUser}
                        open={Boolean(anchorElUser)} 
                        onClose={handleCloseUser} >
                        <MenuList>

                            <Link href="/" className={styles.linkMenu}><MenuItem><AccountIcon/>Profile</MenuItem></Link>
                            <Link href="/" className={styles.linkMenu}><MenuItem><LogoutIcon/>Logout</MenuItem></Link>
                        </MenuList>
                    </Menu>
                    <IconButton color="inherit">
                        <NotificationsIcon/>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}