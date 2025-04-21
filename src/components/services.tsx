import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const services = [
  { title: 'Cardiology', image: '/images/services/cardiology.jpg' },
  { title: 'Pediatrics', image: '/images/services/pediatrics.jpg' },
  { title: 'Dermatology', image: '/images/services/dermatology.jpg' },
  { title: 'Orthopedics', image: '/images/services/ortho.jpg' },
  { title: 'Neurology', image: '/images/services/neurology.jpg' },
  { title: 'Radiology', image: '/images/services/radiology.jpg' },
];

const Services = () => {
  return (
    <Box sx={{ mt: 8, width: '100%' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Explore our specialized departments and book consultations with ease.
      </Typography>

      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        gap: 3,
      }}>
        {services.map((service, index) => (
          <Box key={index} sx={{
            width: { xs: '100%', sm: '45%', md: '30%' },
          }}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="600">
                  {service.title}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Services;