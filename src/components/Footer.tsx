import {
    Box,
    Typography,
    Stack,
    Link,
    IconButton,
  } from '@mui/material';
  import {
    Facebook,
    Instagram,
    Twitter,
    LinkedIn,
    Phone,
    Email,
    LocationOn,
  } from '@mui/icons-material';
  
  const Footer = () => {
    return (
      <Box sx={{ backgroundColor: '#1e293b', color: '#fff', mt: 10, py: 6 }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-around"
          px={{ xs: 3, md: 10 }}
          spacing={4}
        >
          {/* Brand & Contact */}
          <Stack spacing={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Growthzi Doctor
            </Typography>
            <Typography variant="body2" color="gray">
              Your health, our priority. Compassionate care with expert doctors.
            </Typography>
  
            <Stack direction="row" alignItems="center" spacing={1}>
              <LocationOn fontSize="small" />
              <Typography variant="body2">123 Health St, New Delhi</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Phone fontSize="small" />
              <Typography variant="body2">+91 0123456789</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Email fontSize="small" />
              <Typography variant="body2">support@growthzidoctor.com</Typography>
            </Stack>
          </Stack>
  
          {/* Quick Links */}
          <Stack spacing={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link href="/" color="inherit" underline="hover">Home</Link>
              <Link href="/services" color="inherit" underline="hover">Services</Link>
              <Link href="/doctors" color="inherit" underline="hover">Doctors</Link>
              <Link href="/contact" color="inherit" underline="hover">Contact Us</Link>
            </Stack>
          </Stack>
  
          {/* Social */}
          <Stack spacing={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton href="#" sx={{ color: '#fff' }}><Facebook /></IconButton>
              <IconButton href="#" sx={{ color: '#fff' }}><Instagram /></IconButton>
              <IconButton href="#" sx={{ color: '#fff' }}><Twitter /></IconButton>
              <IconButton href="#" sx={{ color: '#fff' }}><LinkedIn /></IconButton>
            </Stack>
          </Stack>
        </Stack>
  
        <Typography textAlign="center" mt={4} color="gray" variant="body2">
          © {new Date().getFullYear()} Growthzi Doctor. All rights reserved.
        </Typography>
      </Box>
    );
  };
  
  export default Footer;