import * as React from "react";
import Link from "next/link";
import {AppBar, Toolbar, Box, IconButton, Menu, MenuList, MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./navbarIndex.module.css"

export default function NavBarIndex() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar elevation={0} position="fixed" sx={{backgroundColor:'#111133'}}>
            <Toolbar>
                <Box sx={{flexGrow:1, display:{xs:'none', md:'flex'}}}>
                    <img
                        src="/Logo-orange.svg"
                        alt="Logo Orage Juice"
                        style={{width: "auto", marginRight:"7rem"}}
                    />
                </Box>
                
                <Box sx={{display:{xs:'none',md:'flex'}}}>
                    <Link href="/login" className={styles.link}>Login</Link>
                    <Link href="/cadastro" className={styles.link}>Register</Link>
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
                            <Link href="/login" className={styles.linkMenu}><MenuItem>Login</MenuItem></Link>
                            <Link href="/cadastro" className={styles.linkMenu}><MenuItem>Register</MenuItem></Link>
                        </MenuList>
                    </Menu>
                </Box>

                <Box sx={{display:{xs:'flex', md:'none'}}}>
                    <img
                        src="/Logo-orange.svg"
                        alt="Logo Orage Juice"
                        style={{width: "auto"}}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
}