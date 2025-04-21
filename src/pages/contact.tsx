import { Box, Container, Typography, TextField, Button, Stack, Paper } from '@mui/material';

const Contact = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        We’re here to help. Feel free to ask us anything or book an appointment.
      </Typography>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
        {/* Contact Form */}
        <Paper elevation={3} sx={{ p: 4, flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Send Us a Message
          </Typography>
          <form>
            <TextField fullWidth label="Your Name" margin="normal" required />
            <TextField fullWidth label="Your Email" margin="normal" required />
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              margin="normal"
              required
            />
            <Button variant="contained" type="submit" sx={{ mt: 2 }}>
              Submit
            </Button>
          </form>
        </Paper>

        {/* Contact Info */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Clinic Address
          </Typography>
          <Typography>123 Health Street, New Delhi</Typography>

          <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
            Phone
          </Typography>
          <Typography>+91 0123456789</Typography>

          <Typography variant="h6" sx={{ mt: 3 }} gutterBottom>
            Email
          </Typography>
          <Typography>contact@growthzidoctor.com</Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default Contact;