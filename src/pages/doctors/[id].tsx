import { useRouter } from 'next/router';
import { doctorList } from '@/data/doctors';
import { useCartStore } from '@/store/cartStore';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Button,
  Alert,
} from '@mui/material';
import { useState, useEffect } from 'react';

const DoctorDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [doctor, setDoctor] = useState<any>(null);
  const addToCart = useCartStore((state) => state.addToCart);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (id && typeof id === 'string') {
      const foundDoctor = doctorList.find((doc) => doc.id === id);
      setDoctor(foundDoctor || null);
    }
  }, [id]);

  const handleAdd = () => {
    if (doctor) {
      addToCart({
        id: doctor.id,
        name: doctor.name,
        price: doctor.price,
        quantity: 1,
      });
      setAdded(true);
      setTimeout(() => setAdded(false), 3000);
    }
  };

  if (!doctor) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h6" color="error">
          Doctor not found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      {added && <Alert severity="success">Doctor added to cart!</Alert>}

      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, p: 2 }}>
        <CardMedia
          component="img"
          sx={{ width: { xs: '100%', md: 320 }, borderRadius: 2 }}
          image={doctor.image}
          alt={doctor.name}
        />

        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight="bold">
            {doctor.name}
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {doctor.specialization}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {doctor.bio}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            <strong>Available:</strong> {doctor.timings}
          </Typography>
          <Typography variant="body2" fontWeight="bold" sx={{ mb: 3 }}>
            ₹{doctor.price}
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={handleAdd}>
              Add to Cart
            </Button>
            <Button variant="contained" href="/booking">
              Book Now
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DoctorDetail;
