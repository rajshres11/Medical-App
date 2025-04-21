import { Box, Container, Typography, Card, CardContent, Avatar, Stack } from '@mui/material';

const testimonials = [
  {
    name: 'Priya Sharma',
    feedback: 'ClinicCare doctors are very attentive and professional. I felt safe and cared for.',
    avatar: '/images/patients/patient1.jpg',
  },
  {
    name: 'Amit Patel',
    feedback: 'Booking an appointment was easy and the consultation was very thorough.',
    avatar: '/images/patients/patient2.jpg',
  },
  {
    name: 'Riya Kapoor',
    feedback: 'The clinic has a welcoming atmosphere. The doctors are kind and knowledgeable.',
    avatar: '/images/patients/patient3.jpg',
  },
];

const Testimonials = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        What Our Patients Say
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Real stories from people who’ve experienced our care.
      </Typography>

      <Stack
  direction={{ xs: 'column', md: 'row' }} // Stack vertically on extra-small (mobile), horizontally on medium and up
  spacing={4}
  justifyContent={{ xs: 'center', md: 'space-between' }} // Center on mobile, space-between on larger screens
  alignItems="stretch"
>
  {testimonials.map((item, index) => (
    <Card key={index} sx={{ width: { xs: '100%', md: '30%' } }}> {/* Full width on mobile, 30% on larger screens */}
      <CardContent>
        <Box display="flex" alignItems="center" gap={2} mb={2}>
          <Avatar src={item.avatar} alt={item.name} />
          <Typography fontWeight="bold">{item.name}</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          “{item.feedback}”
        </Typography>
      </CardContent>
    </Card>
  ))}
</Stack>
    </Container>
  );
};

export default Testimonials;