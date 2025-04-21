import {  Typography, Container, Stack, Card, CardContent } from '@mui/material';

const values = [
  {
    title: 'Compassionate Care',
    description: 'We provide care with empathy, dignity, and respect to every patient.',
  },
  {
    title: 'Expert Professionals',
    description: 'Our team includes highly qualified doctors and staff with years of experience.',
  },
  {
    title: 'Modern Technology',
    description: 'We use the latest tools and technologies for accurate diagnosis and treatment.',
  },
];

const AboutUs = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        About Growthzi Doctor
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        At Growthzi Doctor, our mission is to provide exceptional healthcare services with a focus on
        compassion and innovation. We are committed to improving lives through quality care, expert
        consultations, and patient-centered service.
      </Typography>

      <Stack
  direction={{ xs: 'column', md: 'row' }}
  spacing={4}
  justifyContent="space-between"
  alignItems="stretch"
>
  {values.map((value) => (
    <Card key={value.title} sx={{ flex: 1 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {value.title}
        </Typography>
        <Typography variant="body2">{value.description}</Typography>
      </CardContent>
    </Card>
  ))}
</Stack>

    </Container>
  );
};

export default AboutUs;