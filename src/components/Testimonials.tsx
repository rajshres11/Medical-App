import {
    Box,
    Typography,
    Card,
    CardContent,
    Avatar,
    Stack,
    Rating,
  } from '@mui/material';
  
  const testimonials = [
    {
      name: 'Ananya Sharma',
      feedback: 'The doctors were very helpful and the appointment process was smooth!',
      image: '/images/patients/patient1.jpg',
      rating: 5,
    },
    {
      name: 'Rahul Kumar',
      feedback: 'Great experience, highly professional team and quality care.',
      image: '/images/patients/patient2.jpg',
      rating: 4,
    },
    {
      name: 'Priya Desai',
      feedback: 'Highly recommend this clinic. Easy online consultation options too.',
      image: '/images/patients/patient3.jpg',
      rating: 5,
    },
  ];
  
  const Testimonials = () => {
    return (
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          What Our Patients Say
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Hear from patients who trust us with their health.
        </Typography>
  
        <Stack direction="row" spacing={3} useFlexGap flexWrap="wrap">
          {testimonials.map((t) => (
            <Card key={t.name} sx={{ width: { xs: '100%', md: 'calc(33.33% - 24px)' } }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar src={t.image} alt={t.name} sx={{ mr: 2 }} />
                  <Box>
                    <Typography fontWeight="600">{t.name}</Typography>
                    <Rating value={t.rating} readOnly size="small" />
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  “{t.feedback}”
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    );
  };
  
  export default Testimonials;