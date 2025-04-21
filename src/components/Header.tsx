'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/store/authStore';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Booking', href: '/booking' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isLoggedIn, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="sticky" color="primary" elevation={4}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component={Link} href="/" sx={{ fontWeight: 'bold', color: '#fff', textDecoration: 'none' }}>
            Growthzi Doctor
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {isLoggedIn ? (
                <>
                  {navItems.map((item) => (
                    <Button key={item.label} color="inherit" component={Link} href={item.href}>
                      {item.label}
                    </Button>
                  ))}
                  <Button color="inherit" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button color="inherit" component={Link} href="/login">
                    Login
                  </Button>
                  <Button color="inherit" component={Link} href="/signup">
                    Signup
                  </Button>
                </>
              )}
            </Box>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton color="inherit" edge="end" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {isLoggedIn ? (
              <>
                {navItems.map((item) => (
                  <ListItem key={item.label} disablePadding>
                    <ListItemButton component={Link} href={item.href}>
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
                <ListItem disablePadding>
                  <ListItemButton onClick={handleLogout}>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </ListItem>
              </>
            ) : (
              <>
                <ListItem disablePadding>
                  <ListItemButton component={Link} href="/login">
                    <ListItemText primary="Login" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component={Link} href="/signup">
                    <ListItemText primary="Signup" />
                  </ListItemButton>
                </ListItem>
              </>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
