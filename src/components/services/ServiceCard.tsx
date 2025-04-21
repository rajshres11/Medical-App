import {
    Card,
    CardContent,
    Typography,
    CardMedia,
    Button,
    Stack,
    Snackbar,
    Alert,
  } from '@mui/material';
  import { useCartStore } from '@/store/cartStore';
  import { useState } from 'react';
  
  type Props = {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
  };
  
  const ServiceCard = ({ id, name, price, image, description }: Props) => {
    const addToCart = useCartStore((state) => state.addToCart);
    const [openSnackbar, setOpenSnackbar] = useState(false);
  
    return (
      <Card sx={{ height: '100%' }}>
        <CardMedia component="img" height="160" image={image} alt={name} />
        <CardContent>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>{description}</Typography>
          <Typography fontWeight="bold">₹{price}</Typography>
          <Stack direction="row" justifyContent="space-between" mt={2}>
            <Button
              variant="outlined"
              onClick={() => {
                addToCart({ id, name, price, quantity: 1 });
                setOpenSnackbar(true);
              }}
            >
              Add to Cart
            </Button>
            <Button variant="contained" color="primary" href="/booking">
              Book Now
            </Button>
          </Stack>
        </CardContent>
  
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
            {name} added to cart!
          </Alert>
        </Snackbar>
      </Card>
    );
  };
  
  export default ServiceCard;
  