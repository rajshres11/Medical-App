import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';

const Hero = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        mt: 4,
        gap: 4,
      }}
    >
      {/* Text Section */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Your Health, <br /> Our Priority
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Expert doctors. Quality care. Book appointments with top-rated professionals at your convenience.
        </Typography>
        <Button variant="contained" size="large" href="/booking">
          Book Appointment
        </Button>
      </Box>

      {/* Image Section */}
      <Box sx={{ flex: 1 }}>
        <Image
          src="/images/hero-doctor1.png" // You can replace this with your actual image
          alt="Doctor"
          width={500}
          height={400}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
