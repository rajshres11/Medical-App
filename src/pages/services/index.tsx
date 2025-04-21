import {
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Stack,
  } from '@mui/material';
  import { useState } from 'react';
  import ServiceCard from '@/components/services/ServiceCard';
  
  const services = [
    {
      id: '1',
      name: 'Cardiology Consultation',
      specialization: 'Cardiology',
      gender: 'Male',
      price: 1200,
      image: '/images/services/heart.jpg',
      description: 'Comprehensive heart health check-up with top specialists.',
    },
    {
      id: '2',
      name: 'Pediatric Care',
      specialization: 'Pediatrics',
      gender: 'Female',
      price: 800,
      image: '/images/services/child.jpg',
      description: 'Expert child healthcare services and vaccinations.',
    },
    {
      id: '3',
      name: 'Skin Treatment',
      specialization: 'Dermatology',
      gender: 'Male',
      price: 1000,
      image: '/images/services/skin.jpg',
      description: 'Advanced skin care and cosmetic procedures.',
    },
    // Add more as needed
  ];
  
  export default function ServicesPage() {
    const [specialty, setSpecialty] = useState('');
    const [gender, setGender] = useState('');
  
    const filtered = services.filter(
      (s) =>
        (specialty ? s.specialization === specialty : true) &&
        (gender ? s.gender === gender : true)
    );
  
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Our Services
        </Typography>
  
        {/* Responsive Filters */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }} // Stack on extra-small, row on small and up
          spacing={{ xs: 2, sm: 2 }} // Adjust spacing for different screen sizes
          mb={4}
          sx={{ alignItems: 'flex-start' }} // Align items to the start on mobile
        >
          <FormControl fullWidth sx={{ minWidth: { sm: 200 } }}> {/* Make full width on xs */}
            <InputLabel>Specialty</InputLabel>
            <Select
              value={specialty}
              label="Specialty"
              onChange={(e) => setSpecialty(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Cardiology">Cardiology</MenuItem>
              <MenuItem value="Pediatrics">Pediatrics</MenuItem>
              <MenuItem value="Dermatology">Dermatology</MenuItem>
            </Select>
          </FormControl>
  
          <FormControl fullWidth sx={{ minWidth: { sm: 200 } }}> {/* Make full width on xs */}
            <InputLabel>Doctor Gender</InputLabel>
            <Select
              value={gender}
              label="Doctor Gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        </Stack>
  
        {/* Responsive Stack of services */}
        <Stack spacing={3}>
          {filtered.map((s) => (
            <ServiceCard key={s.id} {...s} />
          ))}
        </Stack>
      </Box>
    );
  }