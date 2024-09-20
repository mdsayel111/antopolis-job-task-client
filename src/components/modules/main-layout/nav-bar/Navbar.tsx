"use client"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { CgMenu } from 'react-icons/cg';
import { routes } from "@/constants/route"

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div className='sticky top-0 z-[78000] bg-primary shadow-2xl text-white'>
            <Container maxWidth="xl">
                <div className='flex justify-between items-center flex-row-reverse lg:flex-row'>
                    {/* larger device logo */}
                    <Link href={"/"} className='hidden lg:block'>
                        <Image src="/logo.png" height={50} width={50} alt='Logo' />
                    </Link>

                    {/* smaller device navitems */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <CgMenu />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {/* render nav items by map routes array */}
                            {routes.map((route) => (
                                <MenuItem key={route.path} onClick={handleCloseNavMenu}>
                                    <Typography sx={{ textAlign: 'center' }}><Link href={route.path}>{route.name}</Link></Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* smaller device logo */}
                    <Link href={"/"} className='lg:hidden'>
                        <Image height={30} width={30} alt='Logo' src={"/logo.png"} />
                    </Link>

                    {/* larger device navitems */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {routes.map((route) => (
                            <Button
                                key={route.name}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link href={route.path}>{route.name}</Link>
                            </Button>
                        ))}
                    </Box>
                </div>
            </Container>
        </div>
    );
}
export default Navbar;
