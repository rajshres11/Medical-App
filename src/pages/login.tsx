import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/router';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';

const LoginPage = () => {
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // basic auth logic
    if (email && password) {
      login();
      router.push('/');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8 }}>
      <Typography variant="h5" gutterBottom>Login</Typography>
      <TextField label="Email" fullWidth sx={{ mb: 2 }} value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" type="password" fullWidth sx={{ mb: 2 }} value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" fullWidth onClick={handleLogin}>Login</Button>
    </Box>
  );
};

export default LoginPage;
