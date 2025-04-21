import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Stack,
  } from '@mui/material';
  import Link from 'next/link';
  
  const doctors = [
    {
      id: 'arjun-mehta',
      name: 'Dr. Arjun Mehta',
      specialization: 'Cardiologist',
      image: '/images/doctors/doctor1.jpg',
    },
    {
      id: 'nisha-rao',
      name: 'Dr. Nisha Rao',
      specialization: 'Pediatrician',
      image: '/images/doctors/doctor2.jpg',
    },
    {
      id: 'rahul-verma',
      name: 'Dr. Rahul Verma',
      specialization: 'Dermatologist',
      image: '/images/doctors/doctor3.jpg',
    },
  ];
  
  const FeaturedDoctors = () => {
    return (
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Featured Doctors
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Meet our experienced and friendly specialists ready to care for you.
        </Typography>
  
        <Stack direction="row" spacing={3} justifyContent="space-around" flexWrap="wrap">
          {doctors.map((doc) => (
            <Card key={doc.id} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="220"
                image={doc.image}
                alt={doc.name}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="600">
                  {doc.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {doc.specialization}
                </Typography>
                
                {/* ✅ Link to dynamic doctor detail page */}
                <Link href={`/doctors/${doc.id}`} passHref>
                  <Button variant="contained" size="small" fullWidth>
                    View Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    );
  };
  
  export default FeaturedDoctors;
  