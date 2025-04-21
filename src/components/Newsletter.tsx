import {
    Box,
    Typography,
    TextField,
    Button,
    Stack,
    useMediaQuery,
    useTheme,
  } from '@mui/material';
  
  const Newsletter = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    return (
      <Box
        sx={{
          mt: 10,
          py: 6,
          px: 4,
          backgroundColor: '#f3f4f6',
          borderRadius: 4,
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Subscribe to Our Newsletter
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Get the latest health tips, updates, and special offers straight to your inbox.
        </Typography>
  
        <Stack
          direction={isMobile ? 'column' : 'row'}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          maxWidth={500}
          mx="auto"
        >
          <TextField
            type="email"
            label="Your email"
            variant="outlined"
            fullWidth
          />
          <Button variant="contained" color="primary">
            Subscribe
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default Newsletter;
  