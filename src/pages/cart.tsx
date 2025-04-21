import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Divider,
    Button,
    Alert,
  } from '@mui/material';
  import DeleteIcon from '@mui/icons-material/Delete';
  import { useCartStore } from '@/store/cartStore';
  import { useState } from 'react';
  
  const CartPage = () => {
    const { cart, removeFromCart, clearCart } = useCartStore();
    const [cleared, setCleared] = useState(false);
  
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    const handleClear = () => {
      clearCart();
      setCleared(true);
      setTimeout(() => setCleared(false), 3000);
    };
  
    return (
      <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          🛒 Your Cart
        </Typography>
  
        {cleared && <Alert severity="success">Cart has been cleared.</Alert>}
  
        {cart.length === 0 ? (
          <Typography>Your cart is currently empty.</Typography>
        ) : (
          <>
            <List>
              {cart.map((item) => (
                <ListItem key={item.id} secondaryAction={
                  <IconButton edge="end" onClick={() => removeFromCart(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                }>
                  <ListItemText
                    primary={`${item.name} (x${item.quantity})`}
                    secondary={`₹${item.price} each`}
                  />
                </ListItem>
              ))}
            </List>
  
            <Divider sx={{ my: 2 }} />
  
            <Typography variant="h6" fontWeight="bold">
              Total: ₹{totalPrice}
            </Typography>
  
            <Box mt={2}>
              <Button variant="outlined" color="error" onClick={handleClear}>
                Clear Cart
              </Button>
              <Button
                variant="contained"
                color="primary"
                href="/booking"
                sx={{ ml: 2 }}
              >
                Proceed to Booking
              </Button>
            </Box>
          </>
        )}
      </Box>
    );
  };
  
  export default CartPage;
  