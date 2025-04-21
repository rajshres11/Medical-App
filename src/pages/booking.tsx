import {
    Container,
    Typography,
    TextField,
    MenuItem,
    Button,
    Paper,
    Stack,
  } from '@mui/material';
  import { useState } from 'react';
  import { doctorList } from '@/data/doctors';
  
  const Booking = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      doctor: '',
      date: '',
      time: '',
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Booking submitted:', formData);
      alert('Booking Confirmed!');
    };
  
    return (
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Book an Appointment
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Fill in your details and choose a doctor and time slot.
        </Typography>
  
        <Paper sx={{ p: 4 }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
  
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
  
              <TextField
                select
                fullWidth
                label="Select Doctor"
                name="doctor"
                required
                value={formData.doctor}
                onChange={handleChange}
              >
                {doctorList.map((doc) => (
                  <MenuItem key={doc.id} value={doc.name}>
                    {doc.name} ({doc.specialization})
                  </MenuItem>
                ))}
              </TextField>
  
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
                <TextField
                  fullWidth
                  label="Date"
                  name="date"
                  type="date"
                  required
                  InputLabelProps={{ shrink: true }}
                  value={formData.date}
                  onChange={handleChange}
                />
  
                <TextField
                  fullWidth
                  label="Time"
                  name="time"
                  type="time"
                  required
                  InputLabelProps={{ shrink: true }}
                  value={formData.time}
                  onChange={handleChange}
                />
              </Stack>
  
              <Button type="submit" variant="contained" size="large">
                Confirm Booking
              </Button>
            </Stack>
          </form>
        </Paper>
      </Container>
    );
  };
  
  export default Booking;